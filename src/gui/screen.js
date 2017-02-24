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
      figlet.textSync("Jenkins-Tasks", {horizontalLayout: "full"})
    )
  )
}

function selectTask(tasks) {
  let status = new Spinner("Loading task");

  status.start();

  return tasks
  .then(result => {
    status.stop();

    let question =  {
        type: "list",
        name: "taskSelection",
        message: "Select Jenkins task",
        choices: _.map(result, item => item.taskName)
      };

      return inquirer.prompt([question]);
    });
}


module.exports = {
  initScreen: initScreen,
  promptTaskSelection: selectTask
}
