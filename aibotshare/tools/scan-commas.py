import re,glob,sys
INTRO=r"(If|When|Once|After|Before|While|Because|Although|Unless|Until|As soon as|Whenever|Since|Instead|Meanwhile|Next|Then|First|Second|Third|Finally|Today|Now|For example|For now|In the meantime|At the moment|By the time|In short|Otherwise|Also|However|Later|Soon|Tomorrow|Yesterday|Again|Still|Once you|Even if|Even though|So far|Right now|From there|From here|From today|From now on|On the|In the|In your|In this|At the|By )"
out=[]
for f in sorted(glob.glob('*.md')):
    if f.startswith('00-'): continue
    n=0
    for i,l in enumerate(open(f,encoding='utf-8')):
        l=l.rstrip('\r\n')
        if not l.strip() or l.startswith(('-','|','#','**Subject','**Notes','>','*','!','[')) or l.strip().startswith(('Facts','Sender')): continue
        for sent in re.split(r'(?<=[.!?])\s+',l):
            m=re.match(INTRO+r'\b',sent)
            if m and ',' not in sent[:70] and len(sent)>35:
                out.append((f,i+1,sent)); n+=1
for f,i,s in out: print(f"{f}:{i}: {s[:150]}")
print(len(out),file=sys.stderr)
