const path = require('path');
const fs = require('fs');
const lunr = require('lunr');
const cheerio = require('cheerio');

// Change these constants to suit your needs
const HTML_FOLDER = 'docs/.vitepress/dist'; // folder with your HTML files
const SEARCH_FIELDS = ['title', 'description', 'keywords', 'body', 'anchor'];
const EXCLUDE_FILES = ['404.html'];
const EXCLUDE_DIRS = ['changelog'];
const OUTPUT_INDEX_DEV = 'lunr_index.js'; // Index file

function isHtml(filename) {
  const lower = filename.toLowerCase();
  return lower.endsWith('.htm') || lower.endsWith('.html');
}

function findHtml(folder) {
  if (!fs.existsSync(folder)) {
    console.log('Could not find folder: ', folder);
    return undefined;
  }

  const files = fs.readdirSync(folder);
  const htmls = [];
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(folder, files[i]);
    const stat = fs.lstatSync(filename);
    if (EXCLUDE_DIRS.includes(files[i])) {
      continue;
    }
    if (stat.isDirectory()) {
      const recursed = findHtml(filename);
      for (let j = 0; j < recursed.length; j++) {
        recursed[j] = path.join(files[i], recursed[j]).replace(/\\/g, '/');
      }
      htmls.push.apply(htmls, recursed);
    } else if (isHtml(filename) && !EXCLUDE_FILES.includes(files[i])) {
      htmls.push(files[i]);
    }
  }
  return htmls;
}

function readHtml(root, file, fileId) {
  const filename = path.join(root, file);
  const txt = fs.readFileSync(filename).toString();
  //TODO: split content by anchors and create a doc for each
  const $ = cheerio.load(txt);
  let title = $('title').text();
  if (typeof title == 'undefined') {
    title = file;
  }
  let body = $('.theme-container').text();
  if (typeof body == 'undefined') {
    body = '';
  }
  let anchors = Array.from($('.header-anchor')).map((anchor, index) => {
    return {
      hash: $(anchor).attr('href'),
      text: $(anchor).parent().text().split('#')[0].trim(),
      title,
    };
  });
  if (typeof anchors == 'undefined') {
    anchors = null;
  }

  const data = {
    id: fileId,
    link: file,
    t: title,
    b: body,
    a: anchors,
  };
  return data;
}

function buildIndex(docs) {
  const idx = lunr(function () {
    this.ref('id');
    for (let i = 0; i < SEARCH_FIELDS.length; i++) {
      this.field(SEARCH_FIELDS[i].slice(0, 1));
    }
    docs.forEach(function (doc) {
      this.add(doc);
    }, this);
  });
  return idx;
}

function buildPreviews(docs) {
  const result = {};
  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    result[doc['id']] = {
      t: doc['t'],
      l: doc['link'],
      a: doc['a'],
    };
  }
  return result;
}

function main() {
  const files = findHtml(HTML_FOLDER);

  const docs = [];
  if (files !== undefined) {
    for (let i = 0; i < files.length; i++) {
      docs.push(readHtml(HTML_FOLDER, files[i], i));
    }
  }
  const idx = buildIndex(docs);
  const previews = buildPreviews(docs);
  const js =
    'const LUNR_DATA = ' +
    JSON.stringify(idx) +
    ';\n' +
    'const LUNR_LOOKUP = ' +
    JSON.stringify(previews) +
    ';' +
    '\n' +
    'const data = { LUNR_DATA, LUNR_LOOKUP };\n' +
    'export default data;';
  fs.writeFile(OUTPUT_INDEX_DEV, js, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Dev Index saved as ' + OUTPUT_INDEX_DEV);
  });
}

main();
