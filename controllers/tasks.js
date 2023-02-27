const getAllTasks = (req, res) => {
  res.send('All the items');
};

const createTasks = (req, res) => {
  res.send('create task');
};

const getTask = (req, res) => {
  res.send('get single task');
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
