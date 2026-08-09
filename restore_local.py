import os, subprocess

BASE = r'C:\Users\Administrator\WorkBuddy\2026-08-03-09-17-41\study-china-nav'
ck = os.path.join(BASE, 'csc-kit.html')
if os.path.exists(ck):
    os.remove(ck)
    print('removed csc-kit.html')
else:
    print('csc-kit.html already absent')

node = r'C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2\node.exe'
r = subprocess.run([node, os.path.join(BASE, 'seo-generate.cjs')], capture_output=True, text=True)
print('gen rc', r.returncode)
print('gen out tail:', r.stdout.strip()[-200:])
if r.stderr.strip():
    print('gen err tail:', r.stderr.strip()[-200:])

sm = open(os.path.join(BASE, 'sitemap.xml'), encoding='utf-8').read()
print('csc-kit count in sitemap:', sm.count('csc-kit'))
print('csc-kit.html exists locally:', os.path.exists(ck))
