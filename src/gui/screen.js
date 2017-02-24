const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Promise = require("promise");
const CLI  = require('clui');
const Spinner = CLI.Spinner;
const inquirer = require('inquirer');
const _ = require("underscore");

function initScreen() {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync("Jenkins-Jobs", {horizontalLayout: "full"})
    )
  )
}

function selectJob(jobs) {
  let status = new Spinner("Loading tasks");

  status.start();

  return jobs
  .then(result => {
    status.stop();

    let question =  {
        type: "list",
        name: "jobSelection",
        message: "Select Jenkins task",
        choices: _.map(result, item => item.jobName)
      };

      return inquirer.prompt([question]);
    });
}


module.exports = {
  initScreen: initScreen,
  promptJobSelection: selectJob
}
