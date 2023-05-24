const { DataTypes } = require('sequelize');
const db = require('../utils/databases');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Todos;