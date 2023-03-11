const { DataTypes } = require('sequelize');
const db = require('../utils/databases');

const Categories = db.define('categories',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},
{
    timestamps:false
}
)

module.exports = Categories;