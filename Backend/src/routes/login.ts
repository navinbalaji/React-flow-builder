import { Router } from "express";
import { loginController } from "../controller/loginController";

export const loginRouter = Router();

// POST login
loginRouter.post('/', loginController);



