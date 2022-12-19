import express from "express";
import { Sequelize } from "sequelize";
import ("./CONFIG/config.js");
import { route } from "./ROUTE/route.js";

const app = express();
app.use(express.json());

app.use("/api/v1", route);

const port = 2020;
app.listen(port,()=>{
    console.log(`Server is Listening to port: ${port}`)
});