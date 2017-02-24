const url = require("url");
const querystring = require('querystring');
const opn = require('opn');

function startTask(task) {
  let parsedUrl = url.parse(task.taskUrl);
  parsedUrl.query = task.params;
  opn(url.format(parsedUrl));
}

module.exports = {
  startTask: startTask
}
