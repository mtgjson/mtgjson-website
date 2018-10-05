#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'MTGJSON Developers'
SITENAME = 'MTGJSON 4'

# TODO
# Setting the siteurl breaks testing. Commenting out for testing purposes.
# Will re-enable. Long term, there is likely a setting to satisft both deploy
# and testing modes.

# SITEURL = 'https://mtgjson.com/v4'

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
THEME = '/Users/martinproud/Downloads/mtgjson4-website/themes/pelican-bootstrap3'
PLUGIN_PATHS = ['/Users/martinproud/Downloads/mtgjson4-website/plugins']
PLUGINS = ['i18n_subsites']

CUSTOM_CSS = 'css/mtgjson4.css'
STATIC_PATHS = ['css']

# Blogroll
LINKS = (('MTGJSON', 'https://mtgjson.com/'),
         ('GitHub', 'https://github.com/mtgjson/mtgjson4'),
         ('Discord server', 'https://discord.gg/74GUQDE'),)

# Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
