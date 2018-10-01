MTGJSON 4 Website ReadMe
========================

Building the website

The files for MTGJSON 4 website are generated using Pelican. To generate new files, you will need to install the Python package, Pelican.

`pip install pelican`

You will also need the Python Markdown package in order to use Markdown files with the website.

`pip install Markdown`

Most website data is stored in files in `pages/`. The configuration for the website is in `pelicanconf.py` and `publishconf.py`.

To build the site, run the following command:

`pelican /path/to/content -s /path/to/pelicanconf.py`

To test out how the files look, you can create a simple HTTP server:

`cd output`

`python -m http.server`