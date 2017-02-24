const url = require("url");
const querystring = require('querystring');
const request = require("request");
const opn = require('opn');

function startJob(job) {
  let parsedUrl = url.parse(job.jobUrl);
  parsedUrl.query = job.params;
  opn(url.format(parsedUrl));
}

module.exports = {
  startJob: startJob
}
