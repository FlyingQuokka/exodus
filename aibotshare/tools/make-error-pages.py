"""Build the static Botterverse error pages in site/btv-sync/error-pages.

Run:  python tools/make-error-pages.py

Each page is one self-contained HTML file (inline styles and the logo as a data address) so it still shows when PHP
or the database is down. deploy.sh copies them to the WordPress folder. The three files in dropins are the
WordPress drop-ins (db-error.php and maintenance.php and php-error.php) that show these pages.
"""
import base64
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'site', 'btv-sync', 'error-pages')
LOGO = r'D:\Users\Quokka\Desktop\Websites\botterverse\public\wp-content\uploads\2026\11\btv-logo-transparent-300x53.png'

PAGES = {
    'btv-error-403.html': ('Page not open', 'This page is not open to visitors.',
                           'The page you tried to open is not available. You can carry on from the home page.', False),
    'btv-error-500.html': ('Something went wrong', 'Something went wrong on our side.',
                           'We hit a fault and could not show this page. Please try again in a few minutes.', True),
    'btv-error-503.html': ('Back in a moment', 'We are making an update.',
                           'Botterverse will be back in a few minutes. Please try again shortly.', True),
    'btv-error-db.html': ('Back in a moment', 'Botterverse is busy right now.',
                          'We could not load this page just now. Please wait a moment and try again.', True),
}

TEMPLATE = '''<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>{title} - Botterverse</title>
<style>
  html, body {{ margin: 0; padding: 0; }}
  body {{ background: #f8f7ff; color: #2b1a2a; font-family: 'Nunito Sans', 'Trebuchet MS', 'Segoe UI', Verdana, Arial, sans-serif; font-size: 17px; line-height: 1.6; }}
  .wrap {{ max-width: 560px; margin: 0 auto; padding: 48px 16px; }}
  .card {{ background: #fff; border-radius: 16px; padding: 36px 32px 40px; text-align: center; box-shadow: 0 10px 30px rgba(57, 29, 55, .08); }}
  .logo {{ display: block; width: 240px; max-width: 100%; height: auto; margin: 0 auto 28px; }}
  h1 {{ font-family: 'Baloo 2', 'Trebuchet MS', 'Segoe UI', Verdana, Arial, sans-serif; font-size: 28px; line-height: 1.25; color: #391d37; margin: 0 0 12px; }}
  p {{ margin: 0 0 24px; }}
  .btn {{ display: inline-block; background: #8a3f84; color: #fff; text-decoration: none; font-weight: 800; padding: 12px 26px; border-radius: 999px; margin: 4px; }}
  .btn.alt {{ background: #f3eefb; color: #391d37; }}
  @media (max-width: 480px) {{ .card {{ padding: 28px 20px 32px; }} h1 {{ font-size: 24px; }} }}
</style>
</head>
<body>
<div class="wrap">
  <div class="card">
    <a href="/"><img class="logo" src="data:image/png;base64,{logo}" width="240" alt="Botterverse"></a>
    <h1>{heading}</h1>
    <p>{text}</p>
    {buttons}
  </div>
</div>
</body>
</html>
'''


def main():
    logo = base64.b64encode(open(LOGO, 'rb').read()).decode('ascii')
    os.makedirs(OUT, exist_ok=True)
    for name, (title, heading, text, retry) in PAGES.items():
        buttons = '<a class="btn" href="/">Go to Botterverse</a>'
        if retry:
            buttons = '<a class="btn" href="javascript:location.reload()">Try again</a><a class="btn alt" href="/">Go to Botterverse</a>'
        html = TEMPLATE.format(title=title, heading=heading, text=text, logo=logo, buttons=buttons)
        with open(os.path.join(OUT, name), 'w', encoding='utf-8', newline='\n') as f:
            f.write(html)
        print('wrote', name, len(html))


if __name__ == '__main__':
    main()
