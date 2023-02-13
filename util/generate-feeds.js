import fs from 'fs';
import { title, description, pages } from '../docs/.vitepress/config';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const JSON_FILE_NAME = 'site.json';
const RSS_FILE_NAME = 'site.rss';
const XML_FILE_NAME = 'atom.xml';
const ATOM_FILE_NAME = 'changelog.atom';

const SITE_TITLE = title;
const SITE_DESCRIPTION = description;

const BASE_URL = 'https://mtgjson.com';
const API_URL = BASE_URL + '/api/v5/';
const CURRENT_DATE = new Date().toISOString();
const CURRENT_DATE_UTC = new Date().toUTCString();

const generateJSON = async () => {
  try {
    const json = {
      version: 'https://jsonfeed.org/version/1',
      home_page_url: BASE_URL,
      feed_url: `${BASE_URL}/${JSON_FILE_NAME}`,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      items: [],
    };

    await pages.forEach((page) => {
      const url = BASE_URL + page.path;
      const title = page.title;

      json.items.push({
        url,
        title,
        id: `urn:uuid:${uuid(url, uuid.URL)}`,
        date_modified: CURRENT_DATE,
      });
    });

    fs.writeFileSync(`./docs/.vitepress/dist/${JSON_FILE_NAME}`, JSON.stringify(json));
  } catch (err) {
    console.error(err);
  }
};

const generateXML = async () => {
  try {
    const xmlStart = `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>urn:uuid:${uuid(SITE_TITLE, uuid.URL)}</id>
  <title>${SITE_TITLE}</title>
  <subtitle>${SITE_DESCRIPTION}</subtitle>
  <updated>${CURRENT_DATE}</updated>
  <link rel="alternate" href="${BASE_URL}"/>
  <link rel="self" href="${BASE_URL}/${XML_FILE_NAME}"/>
    `;
    let xmlMid = ``;
    const xmlEnd = `
</feed>
    `;

    await pages.forEach((page) => {
      const title = page.title;
      const url = BASE_URL + page.path;

      xmlMid += `
  <entry>
    <title type="html">${title}</title>
    <id>urn:uuid:${uuid(url, uuid.URL)}</id>
    <link href="${url}"/>
    <updated>${CURRENT_DATE}</updated>
  </entry>
      `;
    });

    const xml = xmlStart + xmlMid + xmlEnd;

    fs.writeFileSync(`./docs/.vitepress/dist/${XML_FILE_NAME}`, xml);
  } catch (err) {
    console.error(err);
  }
};

const generateRSS = async () => {
  try {
    const rssStart = `
  <?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${SITE_TITLE}</title>
      <link>${BASE_URL}</link>
      <description>${SITE_DESCRIPTION}</description>
      <lastBuildDate>${CURRENT_DATE_UTC}</lastBuildDate>
      <docs>http://blogs.law.harvard.edu/tech/rss</docs>
      <atom:link href="${BASE_URL}/${XML_FILE_NAME}" rel="self" type="application/rss+xml"/>
    `;
    let rssMid = ``;
    const rssEnd = `
    </channel>
  </rss>
    `;

    await pages.forEach((page) => {
      const title = page.title;
      const url = BASE_URL + page.path;

      rssMid += `
      <item>
        <title><![CDATA[${title}]]></title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${CURRENT_DATE_UTC}</pubDate>
      </item>
      `;
    });

    const rss = rssStart + rssMid + rssEnd;

    fs.writeFileSync(`./docs/.vitepress/dist/${RSS_FILE_NAME}`, rss);
  } catch (err) {
    console.error(err);
  }
};

const generateATOM = async () => {
  try {
    const promised = await axios.get(`${API_URL}Meta.json`);
    const { data } = promised;
    const { meta } = data;

    const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>MTGJSON.com Version Atom</title>
  <link href="${API_URL}"/>
  <updated>${CURRENT_DATE_UTC}</updated>
  <author>
    <name>MTGJSON Developers</name>
  </author>
  <id>urn:uuid:${uuid(API_URL, uuid.URL)}</id>
  <entry>
    <title>MTGJSON Version Date</title>
    <id>urn:uuid:${uuid(meta.date, uuid.URL)}</id>
    <updated>${CURRENT_DATE_UTC}</updated>
    <content>${meta.date}</content>
    <summary>Current MTGJSON build date.</summary>
  </entry>
  <entry>
    <title>MTGJSON Version</title>
    <id>urn:uuid:${uuid(meta.version, uuid.URL)}</id>
    <updated>${CURRENT_DATE_UTC}</updated>
    <content>${meta.version}</content>
    <summary>Current MTGJSON version.</summary>
  </entry>
</feed>`;

    fs.writeFileSync(`./docs/.vitepress/dist/${ATOM_FILE_NAME}`, atom);
  } catch (err) {
    console.error(err);
  }
};

const generateFiles = async () => {
  try {
    await generateJSON();
    await generateXML();
    await generateRSS();
    await generateATOM();
  } catch (err) {
    console.error(err);
  }
};

generateFiles();
