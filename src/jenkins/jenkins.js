const url = require("url");
const querystring = require('querystring');
const request = require("request");
const opn = require('opn');

function startJob(job) {
  let parsedUrl = url.parse(job.jobUrl);
  parsedUrl.query = job.params;

  if (job.jenkinsToken) {
    parsedUrl.query.token = job.jenkinsToken;
    request.post(url.format(parsedUrl), function (err, httpCode, body) {
      console.log(httpCode);
    });
  } else {
    opn(url.format(parsedUrl));
  }
}

module.exports = {
  startJob: startJob
}
