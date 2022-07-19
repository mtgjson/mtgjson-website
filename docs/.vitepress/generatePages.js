import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import { load as parseHtml } from 'cheerio';

const SRC_FOLDER = 'docs';
const EXCLUDE_DIRS = ['changelog', 'public', '.vitepress'];
const FRONTMATTER_REGEX = /---(.*?)---/s;

const isMarkdown = (filename) => {
  const lower = filename.toLowerCase();
  return lower.endsWith('.md');
};

const findMarkdown = (folder) => {
  if (!fs.existsSync(folder)) {
    console.log('Could not find folder: ', folder);
    return undefined;
  }

  const files = fs.readdirSync(folder);
  const markdownFiles = [];

  for (let i = 0; i < files.length; i++) {
    const filename = path.join(folder, files[i]);
    const stat = fs.lstatSync(filename);

    // If its just a markdown file
    if (isMarkdown(filename)) {
      markdownFiles.push(filename);
      continue;
    }

    // If it is a directory
    if (stat.isDirectory()) {
      // Exclude directories
      if (EXCLUDE_DIRS.includes(files[i])) {
        continue;
      }

      const dirFiles = fs.readdirSync(filename);
      const dirIndex = dirFiles[dirFiles.indexOf('index.md')];

      if (dirIndex) {
        const dirIndexFile = `${filename}/${dirIndex}`;
        markdownFiles.push(dirIndexFile);
      }

      dirFiles.forEach((dir) => {
        if (!isMarkdown(dir)) {
          const subDirIndexFile = `${filename}/${dir}/index.md`;

          markdownFiles.push(subDirIndexFile);
        }
      });
    }
  }

  return markdownFiles;
};

const readMarkdown = (filename) => {
  const basePath = filename.split('index.md')[0];
  const [_, ...rest] = basePath.split('/');
  const path = `/${rest.join('/')}`;

  const markdown = fs.readFileSync(filename).toString();
  const markdownStrippedOfFrontmatter = markdown.replace(FRONTMATTER_REGEX, '');
  const markdownIt = new MarkdownIt({
    html: false,
    xhtmlOut: false,
  }).use(MarkdownItAnchor, {
    permalink: MarkdownItAnchor.permalink.headerLink({ safariReaderFix: true }),
  });
  const html = markdownIt.render(markdownStrippedOfFrontmatter);
  const $ = parseHtml(html);
  const headers = Array.from($('.header-anchor'));
  let anchors = headers.length > 0 ? headers : [];
  let title = null;

  anchors = anchors.map((anchor) => {
    const self = $(anchor).parent()[0].name === 'h1';
    const hash = $(anchor)[0].attribs.href;
    const text = $(anchor).find('span').text();

    // Set the current page title based on wether or not the
    // current anchor is the current page title
    title = self ? text : title;

    return {
      hash,
      text
    };
  });

  const page = {
    path,
    anchors,
    title,
  };

  return page;
};

const getPages = () => {
  const files = findMarkdown(SRC_FOLDER);
  const pages = [];

  if (files !== undefined) {
    for (let i = 0; i < files.length; i++) {
      pages.push(readMarkdown(files[i]));
    }
  }

  return pages;
};

export default getPages;
