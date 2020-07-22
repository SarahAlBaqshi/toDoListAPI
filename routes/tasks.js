const express = require("express");

//Controllers
const {
  taskCreate,
  taskList,
  taskDelete,
} = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", taskList);

router.post("/", taskCreate);

router.delete("/:taskID", taskDelete);

module.exports = router;
