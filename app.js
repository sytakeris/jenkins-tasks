#!/usr/bin/env node

var screen = require("./src/gui/screen")
var tasks = require("./src/task/jenkins-tasks");
var jenkins = require("./src/jenkins/jenkins");
var _ = require("underscore");

screen.initScreen();
screen.promptTaskSelection(tasks.getJenkinsTaskList())
  .then(answer => {

    tasks.getJenkinsTaskList()
      .then(tasks => {

          var task =  _.find(tasks, item => item.taskName == answer.taskSelection);

          jenkins.startTask(task);
      });
  });
