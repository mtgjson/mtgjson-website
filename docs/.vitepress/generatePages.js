/**
 * Generate pages data
 *
 * Iterate through the markdown files, convert them to HTML and
 * use Cheerio to walk through the anchors.
 *
 * This is an implementation based off of the package
 * vitepress-plugin-search: https://github.com/emersonbottero/vitepress-plugin-search
 */
import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import { load as cheerioParse } from 'cheerio';

const slugify = (str) => {
  return (
    str
      // Remove control characters
      .replace(/[\u0000-\u001f]/g, '')
      // Replace special characters
      .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, '-')
      // Remove continuous separators
      .replace(/\-{2,}/g, '-')
      // Remove prefixing and trailing separators
      .replace(/^\-+|\-+$/g, '')
      // ensure it doesn't start with a number (#121)
      .replace(/^(\d)/, '_$1')
      // lowercase
      .toLowerCase()
  );
};

// Config options
const OPTIONS = {
  INCLUDE_DIR: '',
  EXCLUDE_DIRS: [],
};

const FRONTMATTER_REGEX = /---(.*?)---/s;
const MARKDOWN_FILE_INDEX = 'index.md';

/**
 * Check if the fileName has a Markdown extension.
 */
const isMarkdown = (fileName) => {
  return fileName.match(MARKDOWN_FILE_INDEX);
};

/**
 * Find each page and subdirectory in our src directory.
 */
const findMarkdown = (dir) => {
  /**
   * For each file/directory in our source directory reduce our content to an array.
   */
  return Array.from(
    new Set(
      fs.readdirSync(dir).reduce((reducer, file) => {
        /**
         * Join the file path to the src path to get a usuable path for getting information on.
         */
        const fileName = path.join(dir, file).toLowerCase();

        /**
         * Get filesystem stats about the file.
         */
        const fileStats = fs.lstatSync(fileName);

        /**
         * If the file is a markdown file, push that to the reducer.
         */
        if (isMarkdown(fileName)) {
          reducer.push(fileName);

          return reducer;
        }

        /**
         * If the file is a directory
         */
        if (fileStats.isDirectory()) {
          /**
           * And it should be excluded, early return the reducer.
           */
          if (OPTIONS.EXCLUDE_DIRS.includes(file)) {
            return reducer;
          }

          /**
           * Get files in the current directory.
           */
          const dirFiles = fs.readdirSync(fileName);

          /**
           * Get the index markdown file of the current directory.
           */
          const dirIndex = dirFiles[dirFiles.indexOf(MARKDOWN_FILE_INDEX)];

          /**
           * If there is one (something like changelog just has more nested directories).
           */
          if (dirIndex) {
            /**
             * Store the markdown index file for thaat directory.
             */
            const dirIndexFile = `${fileName}/${dirIndex}`;

            /**
             * Push that file to the reducer.
             */
            reducer.push(dirIndexFile);
          }

          /**
           * If the directory has another file, its probably a nested directory.
           */
          if (dirFiles.length > 1) {
            const nextDirs = dirFiles.filter((f) => f !== MARKDOWN_FILE_INDEX);

            nextDirs.forEach((dirName) => {
              const nextDirPath = `${fileName}/${dirName}`;
              const dirStats = fs.lstatSync(nextDirPath);

              if (dirStats.isDirectory()) {
                const dir = fs.readdirSync(nextDirPath);
                const cleanDir = dir.filter((f) => f !== MARKDOWN_FILE_INDEX);

                if (cleanDir.length > 0) {
                  cleanDir.forEach((d) => {
                    const path = `${fileName}/${dirName}/${d}/${MARKDOWN_FILE_INDEX}`;

                    reducer.push(path);
                  });
                }
              }
            });
          }

          /**
           * For all the directories subdirectories.
           */
          dirFiles.forEach((dirFile) => {
            const subDirIndexFile = isMarkdown(dirFile)
              ? `${fileName}/${dirFile}`
              : `${fileName}/${dirFile}/${MARKDOWN_FILE_INDEX}`;

            /**
             * Push to the reducer
             */
            reducer.push(subDirIndexFile);
          });
        }

        /**
         * After all, return the reducer
         */
        return reducer;
      }, [])
    ).values()
  );
};

const readMarkdown = (fileName) => {
  /**
   * Title of the file.
   */
  let title = null;

  /**
   * Get usuable path of the read markdown file.
   *
   * This is the path that anchor use to navigate between pages in VitePress.
   */
  const basePath = fileName.split('index.md')[0];
  const [_, ...rest] = basePath.split('/');
  const path = `/${rest.join('/')}`;

  /**
   * Render our markdown in to MarkdownIt in order to get returned HTML to step through.
   *
   * We use markdown-it-anchor to in order to create anchors.
   */
  const markdown = fs.readFileSync(fileName).toString();
  const markdownStrippedOfFrontmatter = markdown.replace(FRONTMATTER_REGEX, '');
  const markdownItPermalink = MarkdownItAnchor.permalink.headerLink();
  const markdownIt = new MarkdownIt().use(MarkdownItAnchor, { permalink: markdownItPermalink, slugify });
  const markdownItHTML = markdownIt.render(markdownStrippedOfFrontmatter);

  /**
   * Use cheerio to parse the the HTML in order to access markup.
   */
  const cheerio = cheerioParse(markdownItHTML);

  /**
   * Map each header from the cheerio HTML to an object containg data about the header.
   */
  const headers = Array.from(cheerio('.header-anchor')).map((anchor) => {
    /**
     * Store if the heading is the h1 which should be the page name
     */
    const self = cheerio(anchor).parent()[0].name === 'h1';

    /**
     * Get the text of the anchor
     */
    const text = cheerio(anchor).text().split('<')[0].trim();

    /**
     * Create the hash of the anchor but split out a question mark for out FAQ headings
     */
    const hash = '#' + slugify(text);

    /**
     * Set the title of the current page if the header is an h1 heading.
     */
    title = self ? text : title;

    /**
     * Return the header itself with metadata.
     */
    return {
      hash,
      text,
    };
  });

  /**
   * Get an array of types from each property block
   */
  const types = Array.from(cheerio('blockquote ul li strong')).reduce((reducer, element) => {
    /**
     * Get the inner text of a property block list item
     */
    const text = cheerio(element).text().split(':')[0];

    if (text === 'Type') {
      const type = cheerio(element).parent().text().split(': ')[1];

      reducer.push(type);
    }

    return reducer;
  }, []);

  /**
   * Construct a type model for a property block
   */
  const model = Array.from(cheerio('blockquote h3')).reduce((reducer, element, index) => {
    /**
     * Get the header text of a property block
     */
    const header = cheerio(element).text();
    /**
     * Get the name of the header
     */
    const name = cheerio(element).text().split('<')[0].trim();
    /**
     * Get the current value mapped to an anchor
     */
    const type = types[index];

    /**
     * Get the optional tag
     */
    const optional = header.includes('optional');

    /**
     * Filter out the non-mappables
     */
    if (type) {
      reducer[index] = {
        name,
        type,
        optional,
      };
    }

    return reducer;
  }, []);

  /**
   * Return the page itself with metadata.
   */
  return {
    path,
    headers,
    model,
    title,
  };
};

/**
 * Get pages data for each page in our source directory.
 *
 * This will find markdown files and directories of markdown files,
 * read the contents of those pages and return metadata-like information
 * about each index.md file nest within the source directory.
 */
const getPages = () => {
  /**
   * Find the markdown in our source directory and reducer that per file to
   * be read markdown with a metadata like array of pages
   */
  return findMarkdown(OPTIONS.INCLUDE_DIR).reduce((reducer, file) => {
    reducer.push(readMarkdown(file));

    return reducer;
  }, []);
};

/**
 * Export the generatePages function
 */
export default (config) => {
  if (!config) {
    throw new Error(`
You must provide a configuration object as an argument to the "generatePages" function...
Options includes:
  {
    INCLUDE_DIR: string = '',
    EXCLUDE_DIRS: string[] = []
  }
    `);
  }

  Object.assign(OPTIONS, config);

  return getPages();
};
