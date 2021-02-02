const fs = require('fs');
const axios = require('axios');

let contributors = [];
const promises = [];
const projects = ['mtgjson', 'mtgjson-website', 'mtgsqlive'];

projects.forEach((project) => {
  promises.push(
    axios.get(`https://api.github.com/repos/mtgjson/${project}/contributors`)
  );
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
    fs.writeFileSync(
      `./docs/.vuepress/src/resources/contributors.json`,
      JSON.stringify(contributors, null, 2),
      'utf-8',
      res => {
        console.warn(res);
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });
