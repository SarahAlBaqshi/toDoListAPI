//Data
let tasks = require("../tasks");

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.taskCreate = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const newTask = { id, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.taskDelete = (req, res) => {
  const { taskID } = req.params;

  const foundTask = tasks.find((task) => task.id === +taskID);
  if (foundTask) {
    tasks = tasks.filter((_task) => _task !== foundTask);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }

  tasks = tasks.filter((_task) => _task.id !== +TaskID);
  res.status(204).end();
};

exports.tasksUpdate = (req, res) => {
  //find the course
  const { taskID } = req.params;
  console.log("i am here" + taskID);
  const foundTask = tasks.find((task) => task.id === +taskID);
  // check if course exists
  if (foundTask) {
    //update course
    foundTask.checked = !req.body.checked;
    res.status(204).end();
  } else {
    res.status(404).json({ message: "task not found" });
  }
};
