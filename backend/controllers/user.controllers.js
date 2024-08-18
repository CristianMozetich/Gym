import { userModel } from "../model/user.model.js";
import { warmupModel } from "../model/user.model.js";
import { objetiveModel } from "../model/user.model.js";
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
  const { ejercicioUno, ejercicioDos, ejercicioTres, duration, sets, rest } =
    req.body;
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const warmup = new warmupModel({
      ejercicioUno,
      ejercicioDos,
      ejercicioTres,
      duration,
      sets,
      rest,
    });

    user.clase.warmup.push(warmup);

    await user.save();

    res.status(200).json({ message: "ejercicio creado", warmup });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteWarmup = async (req, res) => {
  const { userId, warmupId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }
    const ejercicios = user.clase.warmup.id(warmupId);
    if (!ejercicios) {
      return res.status(404).send({ message: "No se encuentra el ejercicio" });
    }

    user.clase.warmup._id = warmupId;
    user.clase.warmup.remove(warmupId);
    await user.save();
    res.status(200).send({ message: "Ejercicio eliminado" });
  } catch {
    res.status(500).send({ message: "Error al eliminar el ejercicio" });
  }
};

export const createMain = async (req, res) => {
  const { ejercicioUno, ejercicioDos, ejercicioTres, duration, sets, rest } =
    req.body;
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const main = new mainModel({
      ejercicioUno,
      ejercicioDos,
      ejercicioTres,
      duration,
      sets,
      rest,
    });

    user.clase.main.push(main);

    await user.save();
    res.status(200).json({ message: "ejercicio creado", main });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMain = async (req, res) => {
  const { userId, mainId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }
    const ejercicio = user.clase.main.id(mainId);
    if (!ejercicio) {
      return res.status(404).send({ message: "No se encuentra el ejercicio" });
    }
    user.clase.main._id = mainId;
    user.clase.main.remove(mainId);
    await user.save();
    res.status(200).send({ message: "Ejercicio eliminado" });
  } catch {
    res.status(500).send({ message: "Error al eliminar el ejercicio" });
  }
};

export const createCooldown = async (req, res) => {
  const { ejercicioUno, ejercicioDos, ejercicioTres, duration, sets } =
    req.body;
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const cooldown = new cooldownModel({
      ejercicioUno,
      ejercicioDos,
      ejercicioTres,
      duration,
      sets,
    });
    user.clase.cooldown.push(cooldown);

    await user.save();
    res.status(200).json({ message: "ejercicio creado", cooldown });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCooldown = async (req, res) => {
  const { userId, cooldownId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }
    const ejercicio = user.clase.cooldown.id(cooldownId);
    if (!ejercicio) {
      return res.status(404).send({ message: "No se encuentra el ejercicio" });
    }
    user.clase.cooldown._id = cooldownId;
    user.clase.cooldown.remove(cooldownId);
    await user.save();
    res.status(200).send({ message: "Ejercicio eliminado" });
  } catch {
    res.status(500).send({ message: "Error al eliminar el ejercicio" });
  }
};

export const getWarmup = async (req, res) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const warmup = user.clase.warmup;
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
    const main = user.clase.main;
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
    const cooldown = user.clase.cooldown;
    res.status(200).json(cooldown);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createObjetive = async (req, res) => {
  const { name, description } = req.body;
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const objective = new objetiveModel({ name, description });

    user.clase.objetive.push(objective);
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
    const objective = user.clase.objetive;
    res.status(200).json(objective);
  } catch (error) {
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

    const objective = user.clase.objetive.id(objectiveId);
    if (!objective) {
      return res.status(404).send({ message: "No se encuentra el objetivo" });
    }

    user.clase.objetive._id = objectiveId;
    user.clase.objetive.remove(objectiveId);
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

