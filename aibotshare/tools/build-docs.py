"""Turn the app's help articles (Markdown) into the HTML that Better Docs holds, as one JSON file.

Run:  python tools/build-docs.py [--help-dir DIR] [--out FILE]

The only source is `docs/help` in the app repository, which this script only reads. Each file has front matter with
title and slug and category and order. The page title is the front matter title so the file's own H1 is left out.
Links such as ../credits-billing/booster-packs.md become /docs/booster-packs/ by looking up the slug in the target's
front matter. The HTML follows what the site already holds: paragraphs and h2 and h3 and ol and ul (nested inside the
li) and strong and code and a. A double quote is written &quot; as the site does.

After building it checks that the words of every article are the same in the HTML as in the Markdown and that every link
points at a slug that exists. It stops with a list when either check fails.

The JSON is applied to a WordPress site by tools/apply-docs.php.
"""
import argparse
import html
import json
import os
import re
import sys

DEFAULT_HELP = r'D:\Users\Quokka\Desktop\Websites\botterverse\public\lab\docs\help'
DEFAULT_OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'output', 'docs-articles.json')


def parse(path):
    text = open(path, encoding='utf-8').read().replace('\r\n', '\n')
    m = re.match(r'---\n(.*?)\n---\n(.*)\Z', text, re.S)
    if not m:
        raise SystemExit('No front matter: ' + path)
    meta = {}
    for line in m.group(1).split('\n'):
        k = re.match(r'([a-z_]+):\s*(.*)$', line)
        if k and not line.startswith(' '):
            meta[k.group(1)] = k.group(2).strip()
    return meta, m.group(2)


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def inline(s, here, slugs, problems):
    codes = []

    def keep(m):
        codes.append('<code>' + esc(m.group(1)) + '</code>')
        return '\x00%d\x00' % (len(codes) - 1)

    s = re.sub(r'`([^`]+)`', keep, s)
    s = esc(s)

    def link(m):
        label, url = m.group(1), m.group(2).replace('&amp;', '&')
        if url.startswith(('http://', 'https://', 'mailto:', '/')):
            return '<a href="%s">%s</a>' % (esc(url), label)
        target, _, frag = url.partition('#')
        full = os.path.normpath(os.path.join(os.path.dirname(here), target))
        slug = slugs.get(full)
        if not slug:
            problems.append('%s: link to %s has no article' % (os.path.basename(here), url))
            return m.group(0)
        return '<a href="/docs/%s/%s">%s</a>' % (slug, ('#' + frag) if frag else '', label)

    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link, s)
    s = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', s)
    return re.sub(r'\x00(\d+)\x00', lambda m: codes[int(m.group(1))], s)


def render_list(level, here, slugs, problems):
    """level: [indent, kind, items]. An item is [text, child level or None]."""
    kind = level[1]
    out = ['<%s>' % kind]
    for text, child in level[2]:
        body = inline(text, here, slugs, problems)
        if child:
            out.append('<li>%s\n%s\n</li>' % (body, render_list(child, here, slugs, problems)))
        else:
            out.append('<li>%s</li>' % body)
    out.append('</%s>' % kind)
    return '\n'.join(out)


def to_html(body, here, slugs, problems):
    lines = body.strip('\n').split('\n')
    if lines and lines[0].startswith('# '):
        lines = lines[1:]
    blocks, para, i = [], [], 0

    def flush():
        if para:
            blocks.append('<p>%s</p>' % inline(' '.join(p.strip() for p in para), here, slugs, problems))
            para.clear()

    marker = re.compile(r'^(\s*)([-*]|\d+\.)\s+(.*)$')
    while i < len(lines):
        line = lines[i]
        h = re.match(r'^(#{2,3}) (.*)$', line)
        if h:
            flush()
            n = len(h.group(1))
            blocks.append('<h%d>%s</h%d>' % (n, inline(h.group(2).strip(), here, slugs, problems), n))
            i += 1
        elif marker.match(line):
            flush()
            # collect the whole list: marker lines and indented continuation lines
            raw = []
            while i < len(lines) and (marker.match(lines[i]) or (lines[i].startswith(' ') and lines[i].strip())):
                raw.append(lines[i])
                i += 1
            # build the tree by indentation: each level is [indent, kind, items] and an item is [text, child level or None]
            levels = []
            top = None
            for r in raw:
                m = marker.match(r)
                if not m:  # continuation of the last item
                    last = levels[-1][2][-1]
                    last[0] += ' ' + r.strip()
                    continue
                indent, mark, text = len(m.group(1)), m.group(2), m.group(3)
                kind = 'ol' if mark[0].isdigit() else 'ul'
                while levels and indent < levels[-1][0]:
                    levels.pop()
                if not levels:
                    levels.append([indent, kind, []])
                    top = levels[0]
                elif indent > levels[-1][0]:
                    child = [indent, kind, []]
                    levels[-1][2][-1][1] = child
                    levels.append(child)
                levels[-1][2].append([text, None])
            root = top
            blocks.append(render_list(root, here, slugs, problems))
        elif not line.strip():
            flush()
            i += 1
        else:
            para.append(line)
            i += 1
    flush()
    return '\n'.join(blocks)


def words_from_markdown(body):
    s = body.strip('\n')
    s = re.sub(r'^# .*\n', '', s, count=1)
    s = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', s)
    s = s.replace('**', '').replace('`', '')
    s = re.sub(r'^\s*([-*]|\d+\.)\s+', '', s, flags=re.M)
    s = re.sub(r'^#{2,3} ', '', s, flags=re.M)
    return s.split()


def words_from_html(h):
    s = re.sub(r'</?(strong|code|a)( [^>]*)?>', '', h)
    s = re.sub(r'<[^>]+>', ' ', s)
    return html.unescape(s).split()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--help-dir', default=DEFAULT_HELP)
    ap.add_argument('--out', default=DEFAULT_OUT)
    a = ap.parse_args()
    files = []
    for folder, _, names in os.walk(a.help_dir):
        for n in names:
            if n.endswith('.md') and n != 'index.md':
                files.append(os.path.join(folder, n))
    slugs = {os.path.normpath(f): parse(f)[0]['slug'] for f in files}
    problems, articles = [], []
    for f in sorted(files):
        meta, body = parse(f)
        h = to_html(body, f, slugs, problems)
        if words_from_markdown(body) != words_from_html(h):
            problems.append('%s: the words in the HTML differ from the Markdown' % os.path.relpath(f, a.help_dir))
        articles.append({
            'slug': meta['slug'], 'title': meta['title'], 'category': meta['category'],
            'folder': os.path.basename(os.path.dirname(f)), 'order': int(meta['order']), 'html': h,
        })
    if len({x['slug'] for x in articles}) != len(articles):
        problems.append('A slug is used twice')
    if problems:
        print('\n'.join(problems))
        sys.exit(1)
    articles.sort(key=lambda x: (x['folder'], x['order']))
    os.makedirs(os.path.dirname(a.out), exist_ok=True)
    with open(a.out, 'w', encoding='utf-8', newline='\n') as fh:
        json.dump(articles, fh, ensure_ascii=False, indent=1)
    print('%d articles written to %s' % (len(articles), a.out))


if __name__ == '__main__':
    main()
