import express from "express";
import loginController from "../controllers/loginController";

const login = express.Router();

login.post("/", loginController.login);

export default login;
