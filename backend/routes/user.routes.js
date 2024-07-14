import express from "express";
import {
  login,
  createWarmup,
  createMain,
  createCooldown,
  getWarmup,
  getMain,
  getCooldown,
  createObjetive,
  getObjetive,
  postPersonalInfo,
  getPersonalInfo,
  deleteObjetive,
  getUsers,
  newUser,
} from "../controllers/user.controllers.js";
import passport from "passport";
const userRouter = express.Router();

userRouter.post("/register", passport.authenticate("register"), newUser);
userRouter.post("/login", passport.authenticate("login"), login);
userRouter.post("/createWarmup", createWarmup);
userRouter.post("/createMain", createMain);
userRouter.post("/createCooldown", createCooldown);
userRouter.post("/createObjetive", createObjetive);
userRouter.post("/personalInfo", postPersonalInfo);
userRouter.get("/:userId/getWarmup", getWarmup);
userRouter.get("/:userId/getMain", getMain);
userRouter.get("/:userId/getCooldown", getCooldown);
userRouter.get("/:userId/getObjetive", getObjetive);
userRouter.get("/:userId/personalInfo", getPersonalInfo);
userRouter.get("/users", getUsers);
userRouter.delete("/deleteObjetive/:userId/:objectiveId", deleteObjetive);

export default userRouter;
