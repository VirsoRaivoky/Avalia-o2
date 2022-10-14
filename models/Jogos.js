const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Jogos = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    developer: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    finished: {
        type: DataTypes.BOOLEAN,
    },
    onGoing: {
        type: DataTypes.BOOLEAN,
    },
    notPlayed: {
        type: DataTypes.BOOLEAN,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
})
module.exports = Jogos