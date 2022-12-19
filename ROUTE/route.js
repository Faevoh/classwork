import { Sequelize } from "sequelize";
import express from "express";
import { allTeam, singleTeam,newTeam, updateTeam, removeTeam, } from "../CONTROLLER/control.js";

export const route = express.Router();

route.get("/teams", allTeam);
route.get("/teams/:id", singleTeam);
route.post("/teams", newTeam);
route.patch("/teams/:id", updateTeam);
route.delete("/teams/:id", removeTeam);
