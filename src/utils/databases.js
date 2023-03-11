const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'entregable_3',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    dialect: 'postgres',
})

module.exports = db;