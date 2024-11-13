import express, { Router } from "express";
const Path = express.Router();

import Controller from "../controllers/controller.js";

Path.get('/testing', Controller.test);
Path.post('/save-credentials', Controller.userCredentials);
Path.post('/match-users', Controller.matchUsers);
Path.post('/add-goal', Controller.addGoal)
Path.get('/get-Todos', Controller.getTodos)

export default Path;