import fs from 'fs';
import axios from 'axios';

let contributors = [];
const promises = [];
const projects = ['mtgjson', 'mtgjson-website', 'mtgsqlive'];

projects.forEach((project) => {
  promises.push(axios.get(`https://api.github.com/repos/mtgjson/${project}/contributors`));
});

Promise.all(promises)
  .then((responses) => {
    return Promise.all(
      responses.map((response) => {
        contributors = [...contributors, ...response.data];
        return response.data;
      })
    );
  })
  .then((data) => {
    return Array.from(new Set(contributors.map((c) => c.login)))
      .filter((login) => !login.includes('[bot]'))
      .map((login) => {
        return {
          username: contributors.find((c) => c.login === login).login,
          url: contributors.find((c) => c.login === login).html_url,
          avatar: contributors.find((c) => c.login === login).avatar_url,
        };
      });
  })
  .then((data) => {
    fs.writeFileSync(`./docs/.vitepress/theme/static/contributors.json`, JSON.stringify(data, null, 2), 'utf-8');
  })
  .catch((err) => {
    console.log(err);
  });
