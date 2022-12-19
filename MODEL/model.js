import { Sequelize, DataTypes } from "sequelize";
import { sequel } from "../CONFIG/config.js";

export const ballModel = sequel.define("footballList", {
    teamName: {
        type: DataTypes.STRING
    },
    homeKitColor: {
        type: DataTypes.STRING
    }, 
    awayKitColor: {
        type: DataTypes.STRING
    },
    numberOfPlayers: {
        type: DataTypes.INTEGER
    },
    playerFirstName: {
        type: DataTypes.STRING
    },
    playerLastName: {
        type: DataTypes.STRING
    },
    playerAge: {
        type: DataTypes.INTEGER
    },
    playerCountry: {
        type: DataTypes.STRING
    },
    playerJerseyNumber: {
        type: DataTypes.INTEGER
    },
    playerSigningFee: {
        type: DataTypes.INTEGER
    },
    clubOwnerName: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});