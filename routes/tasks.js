const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTasks,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
