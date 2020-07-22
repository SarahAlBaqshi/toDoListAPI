const express = require("express");

//Controllers
const {
  taskCreate,
  taskList,
  taskDelete,
  tasksUpdate,
} = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", taskList);

router.post("/", taskCreate);

router.delete("/:taskID", taskDelete);

router.put("/:taskID", tasksUpdate);

module.exports = router;
