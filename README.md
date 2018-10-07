MTGJSON v4 Website
========================

## Site Information
MTGJSON 4's website is generated using [Pelican 3.7.1](http://docs.getpelican.com/en/stable/) and [Markdown 3.0.1](https://python-markdown.github.io/).

## Steps to Build
1) Install python3 dependencies:
```sh
$ pip3 install pelican Markdown
```

2) Make changes to files in the `content/` directory

3) If necessary, modify the config files (`pelicanconf.py`, `publishconf.py`)

4) Build the site using pelican:
```sh
$ pelican /path/to/content -s /path/to/pelicanconf.py
```

5) Start up a local server
```sh
$ python3 -m http.server --directory output
```

6) Review the output via `http://0.0.0.0:8000` (the default website for http.server)