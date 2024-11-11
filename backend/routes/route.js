import express, { Router } from "express";
const Path = express.Router();

import Controller from "../controllers/controller.js";

Path.get('/testing', Controller.test);
Path.post('/send-credentials', Controller.loginCredentials)

export default Path;