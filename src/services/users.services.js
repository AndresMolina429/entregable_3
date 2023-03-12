const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');

class UsersServices {
   static async createUser(user) {
      try {
         const userCreated = Users.create(user);
         return userCreated;
      } catch (error) {
         throw error
      }
   }

   static async getUserTodos(id) {
      try {
         const userCreated = Users.findByPk(id,
            {
               attributes: ['username', 'email'],
               include: [
                  {
                     model: Todos,
                     attributes: ['id', 'title', 'description', 'status', 'category_id'],
                     include: {
                        model: Categories,
                        attributes: ['name']
                     }
                  }
               ]
            }
         );
         return userCreated;
      } catch (error) {
         throw error
      }
   }
}

module.exports = UsersServices;