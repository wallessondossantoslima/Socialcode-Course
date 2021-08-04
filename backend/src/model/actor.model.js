const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Actor = sequelize.define(
    "actor",{
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Actor;
