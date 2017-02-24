# jenkins-tasks
Opens in the browser generated url to jenkins task with filled params

To add a task. You need to create tasks folder. And add json file (**-task.json)

### Json structure

{
  "taskName": "task name",
  "taskUrl": "url to the task",
  "params": "query param object"
}


### Use
After the task jsons are created. Install using npm globally (npm install -g) and run wtih jenkins-tasks command.
