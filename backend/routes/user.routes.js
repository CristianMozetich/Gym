import express from "express";
import { getUsers, newUser } from "../controllers/user.controllers.js";
import { login } from "../controllers/user.controllers.js";
import { createExercise, getExercises, createObjetive, getObjetive, postPersonalInfo, getPersonalInfo, deleteObjetive } from "../controllers/user.controllers.js";
import passport from "passport";

const userRouter = express.Router();

userRouter.post("/register", passport.authenticate('register'), newUser);
userRouter.post("/login", passport.authenticate('login'), login);
userRouter.post("/createExercise", createExercise);
userRouter.post("/createObjetive", createObjetive);
userRouter.post("/personalInfo", postPersonalInfo);
userRouter.get("/:userId/getExercises", getExercises);
userRouter.get("/:userId/getObjetive", getObjetive);
userRouter.get("/:userId/personalInfo", getPersonalInfo);
userRouter.get("/users", getUsers);
userRouter.delete("/deleteObjetive/:userId/:objectiveId", deleteObjetive);


export default userRouter;
