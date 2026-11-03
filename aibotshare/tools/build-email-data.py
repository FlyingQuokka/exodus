"""Turn the written emails in Emails/build into site/btv-sync/data/emails.json.

Run:  python tools/build-email-data.py

Each email becomes {subject, body_html, title, source}. The sign-off line stays in the body.
Emails marked DROPPED are left out. The converter handles only what the emails use:
paragraphs, bold, links, bullet and numbered lists, block quotes and simple tables.
"""
import html
import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'Emails', 'build')
OUT = os.path.join(ROOT, 'site', 'btv-sync', 'data', 'emails.json')

HEADING = re.compile(r'^## (J-[A-Z]{2}|[A-Z]{1,3}\d+[A-Za-z]?(?:-\d+)?(?:-[A-Z])?(?: preview)?) - (.*)$')


def inline(text):
    text = html.escape(text, quote=False)
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^)\s]+)\)', r'<a href="\2">\1</a>', text)
    text = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', text)
    return text


def convert(body):
    out = []
    lines = body.strip('\n').split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                rows.append(lines[i])
                i += 1
            cells = [[c.strip() for c in r.strip().strip('|').split('|')] for r in rows]
            cells = [r for r in cells if not all(re.fullmatch(r':?-+:?', c) for c in r)]
            t = ['<table role="presentation" cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">']
            for n, r in enumerate(cells):
                tag = 'th' if n == 0 else 'td'
                t.append('<tr>' + ''.join('<%s align="left">%s</%s>' % (tag, inline(c), tag) for c in r) + '</tr>')
            t.append('</table>')
            out.append(''.join(t))
            continue
        if line.startswith('>'):
            quote = []
            while i < len(lines) and lines[i].startswith('>'):
                quote.append(lines[i][1:].strip())
                i += 1
            paras, cur = [], []
            for q in quote:
                if q:
                    cur.append(q)
                elif cur:
                    paras.append(cur)
                    cur = []
            if cur:
                paras.append(cur)
            out.append('<blockquote>' + ''.join('<p>' + '<br>'.join(inline(x) for x in p) + '</p>' for p in paras) + '</blockquote>')
            continue
        if re.match(r'^- ', line):
            items = []
            while i < len(lines) and re.match(r'^- ', lines[i]):
                items.append(lines[i][2:])
                i += 1
            out.append('<ul>' + ''.join('<li>%s</li>' % inline(x) for x in items) + '</ul>')
            continue
        if re.match(r'^\d+\. ', line):
            items = []
            while i < len(lines) and re.match(r'^\d+\. ', lines[i]):
                items.append(re.sub(r'^\d+\. ', '', lines[i]))
                i += 1
            out.append('<ol>' + ''.join('<li>%s</li>' % inline(x) for x in items) + '</ol>')
            continue
        m = re.fullmatch(r'\*\*(.+)\*\*', line.strip())
        if m:
            out.append('<h2>%s</h2>' % inline(m.group(1)))
            i += 1
            continue
        para = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r'^(\||>|- |\d+\. )', lines[i]):
            para.append(lines[i])
            i += 1
        out.append('<p>' + '<br>'.join(inline(x) for x in para) + '</p>')
    return '\n'.join(out)


def main():
    emails = {}
    for name in sorted(os.listdir(SRC)):
        if not name.endswith('.md') or name.startswith('00-'):
            continue
        text = io.open(os.path.join(SRC, name), encoding='utf-8').read()
        blocks = re.split(r'\n(?=## )', text)
        for block in blocks:
            first = block.split('\n', 1)[0]
            m = HEADING.match(first)
            if not m or 'DROPPED' in first:
                continue
            eid, title = m.group(1), m.group(2)
            sm = re.search(r'^\*\*Subject:\*\*\s*(.+)$', block, re.M)
            bm = re.search(r'\*\*Body:\*\*\s*\n(.*?)(?=\n\*\*Notes\*\*|\n---\s*$|\Z)', block, re.S)
            if not sm or not bm:
                continue
            eid = eid.replace(' preview', '-preview')
            if eid in emails:
                if 'preview' in title.lower():
                    eid += '-preview'
                elif 'master' in title.lower():
                    eid += '-master'
                if eid in emails:
                    print('duplicate id', eid, name, file=sys.stderr)
                    continue
            emails[eid] = {
                'title': title,
                'subject': sm.group(1).strip(),
                'body_html': convert(bm.group(1)),
                'source': name,
            }
    with io.open(OUT, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(emails, f, ensure_ascii=False, indent=1)
    print('wrote %d emails to %s' % (len(emails), OUT))


if __name__ == '__main__':
    main()
