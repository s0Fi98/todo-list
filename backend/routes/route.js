import express, { Router } from "express";
const Path = express.Router();

import Controller from "../controllers/controller.js";

Path.get('/testing', Controller.test);

export default Path;