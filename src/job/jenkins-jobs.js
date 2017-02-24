const glob = require("glob");
const Promise = require("promise");
const _ = require("underscore");

var readFile = Promise.denodeify(require('fs').readFile);
var tasks = null;

function getJenkinsJobList() {
  if (tasks)
    return Promise.resolve(tasks);

  return getTaskList()
    .then(res => _.map(res, readJSON))
    .then(Promise.all)
    .then(res => {
      tasks = res;
      return tasks
    });
}

function getTaskList() {
  return new Promise(function (fulfill, reject) {
       glob("**/tasks/*-task.json", {}, (err, res) => {
         if (err) {
           reject(err)
         } else {
           fulfill(res);
         }
       });
  })
}


function readJSON(filename) {
  return readFile(filename, "utf8")
    .then(JSON.parse)
}


module.exports = {
  getJenkinsJobList: getJenkinsJobList
}
