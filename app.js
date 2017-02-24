var screen = require("./src/gui/screen")
var jobs = require("./src/job/jenkins-jobs");
var jenkins = require("./src/jenkins/jenkins");
var _ = require("underscore");

screen.initScreen();
screen.promptJobSelection(jobs.getJenkinsJobList())
  .then(answer => {

    jobs.getJenkinsJobList()
      .then(jobs => {

          var job =  _.find(jobs, item => item.jobName == answer.jobSelection);

          jenkins.startJob(job);
      });
  });
