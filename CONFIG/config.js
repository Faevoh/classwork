import Sequelize from "sequelize"; 

export const sequel =  new Sequelize("footballDB", "root", "ROOT",{
    host: "localhost", 
    dialect: "mysql"
});