import express from "express";
import passport from "passport";
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
  deleteWarmup,
  deleteMain,
  deleteCooldown,
  socialLogin,
} from "../controllers/user.controllers";

const userRouter = express.Router();

// Rutas de registro e inicio de sesión local
userRouter.post("/register", passport.authenticate("register", { session: false }), newUser);
userRouter.post("/login", passport.authenticate("login", { session: false }), login);
// Rutas de inicio de sesión con redes
userRouter.post("/auth/socialLogin", socialLogin);

// Rutas de CRUD
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
userRouter.delete("/deleteWarmup/:userId/:warmupId", deleteWarmup);
userRouter.delete("/deleteMain/:userId/:mainId", deleteMain);
userRouter.delete("/deleteCooldown/:userId/:cooldownId", deleteCooldown);

export default userRouter;
