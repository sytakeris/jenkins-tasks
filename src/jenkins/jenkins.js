const url = require("url");
const querystring = require('querystring');
const opn = require('opn');
const fetch = require('node-fetch');

function startTask(task) {
  let parsedUrl = url.parse(task.taskUrl);
  parsedUrl.query = task.params;

  if (task.credentials) {
    let {user, token} = task.credentials;
    parsedUrl.auth = `${user}:${token}`;
    fetch(url.format(parsedUrl), {method: "POST"})
  } else {
    opn(url.format(parsedUrl));
  }

}

module.exports = {
  startTask: startTask
}
