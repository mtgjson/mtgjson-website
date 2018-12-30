#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'MTGJSON Developers'
SITENAME = 'MTGJSON 4'
SITEURL = 'https://mtgjson.com'

PATH = 'content'

TIMEZONE = 'Etc/UTC'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Markdown
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {}
    },
    'output_format': 'html5',
}

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
THEME = 'themes/pelican-bootstrap3'
PLUGIN_PATHS = ['plugins']
PLUGINS = ['i18n_subsites']

CUSTOM_CSS = 'css/mtgjson4.css'
STATIC_PATHS = ['css', 'img', 'extra',]

EXTRA_PATH_METADATA = {
	'extra/robots.txt': {'path': 'robots.txt'},
	'extra/favicon.ico': {'path': 'favicon.ico'},
}

DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False

MENUITEMS = (
    ('Sets', 'sets.html'),
    ('Changelog', 'changelog.html'),
    ('Documentation', 'docs.html'),
    ('About Us', 'about.html'),
)

INDEX_SAVE_AS = None

PAGE_PATHS = ['pages']
PAGE_SAVE_AS = '{slug}.html'

PAGE_ORDER_BY = 'page-order'

# Blogroll
LINKS = (('MTGJSON', SITEURL),
        ('GitHub', 'https://github.com/mtgjson/mtgjson4'),
        ('Discord server', 'https://discord.gg/74GUQDE'),)

# Hide Blogroll
HIDE_SIDEBAR = True

# Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
