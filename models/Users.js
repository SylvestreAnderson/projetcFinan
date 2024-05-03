const {DataTypes} = require('sequelize')

const db = require('../db/conn.js')

const Users = db.define('Users', {
    name: {
        type: DataTypes.STRING,
            required: true,
    },
    adress: {
        type: DataTypes.STRING, 
        required: true,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
})

module.exports = Users