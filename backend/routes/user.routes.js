import express from "express";
import { newUser } from "../controllers/user.controllers.js";
import { login } from "../controllers/user.controllers.js";
import { createExercise } from "../controllers/user.controllers.js";
import passport from "passport";

const userRouter = express.Router();

userRouter.post("/register", passport.authenticate('register'), newUser);
userRouter.post("/login", passport.authenticate('login'), login);
userRouter.post("/createExercise", createExercise);


export default userRouter;
