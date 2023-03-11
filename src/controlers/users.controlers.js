const UsersServices = require('../services/users.services');

const createUser = async (req, res) => {
    try {
        const user = req.body;
        await UsersServices.createUser(user);
        res.status(201).json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const getUserTodos = async (req, res) => {
    try {
        const {user_id} = req.params;
        const userTodos = await UsersServices.getUserTodos(user_id);
        res.json(userTodos);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    createUser,
    getUserTodos
}