import {  userModel } from "../model/user.model.js";
import { warmupModel } from "../model/user.model.js";
import { objetiveModel } from "../model/user.model.js";
import { infoModel } from "../model/user.model.js";
import { createToken } from "../utils/jwt.js";
import { mainModel } from "../model/user.model.js";
import { cooldownModel } from "../model/user.model.js";
export const newUser = async (req, res) => {
  try {
    console.log("Usuario creado");
    res.status(200).json({ mensaje: "Usuario creado" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: `Error al registrar usuario ${error}` });
  }
};

export const login = async (req, res) => {
  try {
    const token = createToken(req.user);

    console.log("Login exitoso");
    res.status(200).json({ mensaje: "Login exitoso", token: token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ mensaje: `Error al iniciar sesión ${error}` });
  }
};

export const createWarmup = async (req, res) => {
  const { name, description, duration, sets, reps, rest, userId } = req.body;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const warmup = new warmupModel({
      name,
      description,
      duration,
      sets,
      reps,
      rest,
    });

    user.warmup.push(warmup);

    await user.save();

    res.status(200).json({ message: "ejercicio creado", warmup });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createMain = async (req, res) => {
  const { name, description, duration, sets, reps, rest, userId } = req.body;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const main = new mainModel({
      name,
      description,
      duration,
      sets,
      reps,
      rest,
    });

    user.main.push(main);

    await user.save();
    res.status(200).json({ message: "ejercicio creado", main });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const createCooldown = async (req, res) => {
  const { name, description, duration, sets, reps, rest, userId } = req.body;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const cooldown = new cooldownModel({
      name,
      description,
      duration,
      sets,
      reps,
      rest,
    });
    user.cooldown.push(cooldown);

    await user.save();
    res.status(200).json({ message: "ejercicio creado", cooldown });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getWarmup = async (req, res) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const warmup = user.warmup;
    res.status(200).json(warmup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMain = async (req, res) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const main = user.main;
    res.status(200).json(main);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCooldown = async (req, res) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const cooldown = user.cooldown;
    res.status(200).json(cooldown);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createObjetive = async (req, res) => {
  const { name, description, userId } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const objective = new objetiveModel({ name, description });

    user.objetive.push(objective);
    await user.save();
    res.status(200).json({ message: "Objetivo creado", objective });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getObjetive = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const objective = user.objetive;
    res.status(200).json(objective);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const postPersonalInfo = async (req, res) => {
  const { peso, altura, edad, sexo, userId } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const info = new infoModel({ peso, altura, edad, sexo });

    user.info.push(info);
    await user.save();
    res.status(200).json({ message: "Información guardada", info });
  } catch {
    res.status(400).json({ message: error.message });
  }
};

export const getPersonalInfo = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userInfo = user.info;
    res.status(200).json(userInfo);
  } catch {
    res.status(400).json({ message: error.message });
  }
};

export const deleteObjetive = async (req, res) => {
  const { userId, objectiveId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }

    const objective = user.objetive.id(objectiveId);
    if (!objective) {
      return res.status(404).send({ message: "No se encuentra el objetivo" });
    }

    user.objetive._id = objectiveId;
    user.objetive.remove(objectiveId);
    await user.save();
    res.status(200).send({ message: "Objetivo eliminado" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  try {
    res.status(200).json(users);
  } catch {
    res.status(400).json({ message: error.message });
  }
};
