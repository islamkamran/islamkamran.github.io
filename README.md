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

Run locally: open `index.html` in a browser, or run `python -m http.server` in this folder.
