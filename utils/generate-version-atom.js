/**
 * version.atom generator that generates an atom based on
 * version.json output from MTGJSON.
 */
'use strict';

const fetch = require('node-fetch');
const uuidv4 = require('uuid').v4;
const fs = require('fs');

(async () => {
  const host = 'https://mtgjson.com/api/v5/';
  const generationDate = new Date().toISOString();

  try {
    const promised = await fetch(`${host}Meta.json`);
    const { data } = await promised.json();
    const atom =
`<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>MTGJSON.com Version Atom</title>
  <link href="${host}"/>
  <updated>${generationDate}</updated>
  <author>
    <name>MTGJSON Developers</name>
  </author>
  <id>urn:uuid:${uuidv4(host, uuidv4.URL)}</id>
  <entry>
    <title>MTGJSON Version Date</title>
    <id>urn:uuid:${uuidv4()}</id>
    <updated>${generationDate}</updated>
    <content>${data.date}</content>
    <summary>Current MTGJSON build date.</summary>
  </entry>
  <entry>
    <title>MTGJSON Version</title>
    <id>urn:uuid:${uuidv4()}</id>
    <updated>${generationDate}</updated>
    <content>${data.version}</content>
    <summary>Current MTGJSON version.</summary>
  </entry>
</feed>`;

    fs.writeFileSync(
      `./docs/.vuepress/dist/changelog.atom`,
      atom
    );
  } catch (err) {
    console.error(err);
  }
})();
