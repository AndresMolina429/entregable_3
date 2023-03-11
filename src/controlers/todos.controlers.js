const TodosServices = require('../services/todos.services');

const createTodos = async (req, res) => {
    try {
        const task = req.body;
        const taskCreated = await TodosServices.createTasks(task)
        res.json(taskCreated);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateStatusTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const statusTask = req.body;
        const statusTaskUpdated = await TodosServices.updateStatusTask(statusTask, id)
        res.json(statusTaskUpdated);
    } catch (error) {
        res.status(400).json(error);
    }
};
const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const taskDeleted = await TodosServices.deleteTask(id)
        res.json(taskDeleted);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { 
    createTodos,
    updateStatusTodos,
    deleteTodos
 };