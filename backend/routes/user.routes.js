import express from "express";
import { newUser } from "../controllers/user.controllers.js";
import { login } from "../controllers/user.controllers.js";
import { createExercise, getExercises, createObjective, getObjetive, postPersonalInfo } from "../controllers/user.controllers.js";
import passport from "passport";

const userRouter = express.Router();

userRouter.post("/register", passport.authenticate('register'), newUser);
userRouter.post("/login", passport.authenticate('login'), login);
userRouter.post("/createExercise", createExercise);
userRouter.post("/createObjetive", createObjective);
userRouter.post("/personalInfo", postPersonalInfo);
userRouter.get("/:userId/getExercises", getExercises);
userRouter.get("/:userId/getObjetive", getObjetive);


export default userRouter;
