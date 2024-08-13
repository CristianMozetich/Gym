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
  deleteObjetive,
  getUsers,
  newUser,
} from "../controllers/user.controllers.js";
import passport from "passport";
const userRouter = express.Router();

userRouter.post("/register", passport.authenticate("register"), newUser);
userRouter.post("/login", passport.authenticate("login"), login);
userRouter.post("/:userId/createWarmup", createWarmup);
userRouter.post("/:userId/createMain", createMain);
userRouter.post("/:userId/createCooldown", createCooldown);
userRouter.post("/:userId/createObjetive", createObjetive);
userRouter.get("/:userId/getWarmup", getWarmup);
userRouter.get("/:userId/getMain", getMain);
userRouter.get("/:userId/getCooldown", getCooldown);
userRouter.get("/:userId/getObjetive", getObjetive);
userRouter.get("/users", getUsers);
userRouter.delete("/deleteObjetive/:userId/:objectiveId", deleteObjetive);

export default userRouter;
