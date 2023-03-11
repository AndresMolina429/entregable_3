const Todos = require('../models/todos.models');

class TodosServices {
    static async createTasks(task){
        try {
            const taskCreated = Todos.create(task);
            return taskCreated;
        } catch (error) {
           throw error; 
        }
    }

    static async updateStatusTask(statusTask,id){
        try {
            const statusTaskUpdated = Todos.update(statusTask,{
                where: {id}
            });
            return statusTaskUpdated;
        } catch (error) {
           throw error; 
        }
    }

    static async deleteTask(id){
        try {
            const deletedTask = Todos.destroy({
                where: {id}
            });
            return deletedTask;
        } catch (error) {
           throw error; 
        }
    }
}
module.exports = TodosServices;