# islamkamran.github.io

Personal portfolio of **Muhammad Islam Kamran**, Senior Backend & Distributed Systems Engineer (Dubai, UAE).

Live: https://islamkamran.github.io

## Structure

```
index.html              single-page site
assets/css/style.css    theme (dark & premium)
assets/js/main.js       nav, CV dropdown, scroll reveal
images/profile.jpg      portrait (shown in a 4:5 frame)
files/                  downloadable CVs linked from the site
Resumes/                source CVs
.nojekyll               serve as plain static files on GitHub Pages
```

## Updating

- **Photo:** overwrite `images/profile.jpg`, or change the `<img>` path in `index.html`.
- **CVs:** replace the PDFs in `files/` and keep the same file names, so links keep working.
- **Projects / skills / experience:** edit the matching `<section>` in `index.html`.
- **Arabic text:** every translatable element has `data-i18n="key"`; its Arabic text lives under the same key in `assets/js/i18n.js`. When you add or change English text, add or update the matching key there.
- **Theme / language:** light and English are the defaults. Visitors' choices are saved in their browser. `?lang=ar` opens the Arabic version directly.
- **Default theme:** to make dark the default, change `t === 'dark' ? 'dark' : 'light'` in the `<head>` script of `index.html` to `t === 'light' ? 'light' : 'dark'`.
- **Logo:** `images/logo.png` (bold version of `signature.png`) is used as a CSS mask, so it's coloured by the theme's gold automatically.

Run locally: open `index.html` in a browser, or run `python -m http.server` in this folder.
