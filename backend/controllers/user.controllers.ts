import { userModel } from "../model/user.model";
import { warmupModel } from "../model/user.model";
import { objetiveModel } from "../model/user.model";
import { createToken } from "../utils/jwt";
import { mainModel } from "../model/user.model";
import { cooldownModel } from "../model/user.model";
import { Request, Response } from "express";


export const newUser = async (req: Request, res: Response) => {
  try {
    console.log("Usuario creado");
    res.status(200).json({ mensaje: "Usuario creado" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: `Error al registrar usuario ${error}` });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = createToken(req.user);

    console.log("Login exitoso");
    res.status(200).json({ mensaje: "Login exitoso", token: token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ mensaje: `Error al iniciar sesión ${error}` });
  }
};

export const createWarmup = async (req: Request, res: Response) => {
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

    user.clase?.warmup.push(warmup);

    await user.save();

    res.status(200).json({ message: "ejercicio creado", warmup });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el ejercicio" });
  }
};

export const deleteWarmup = async (req: Request, res: Response) => {
  const { userId, warmupId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }
    const ejercicios = user.clase?.warmup.id(warmupId);
    if (!ejercicios) {
      return res.status(404).send({ message: "No se encuentra el ejercicio" });
    }

    user.clase?.warmup.remove(warmupId);
    await user.save();
    res.status(200).send({ message: "Ejercicio eliminado" });
  } catch {
    res.status(500).send({ message: "Error al eliminar el ejercicio" });
  }
};

export const createMain = async (req: Request, res: Response) => {
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

    user.clase?.main.push(main);

    await user.save();
    res.status(200).json({ message: "ejercicio creado", main });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el ejercicio" });
  }
};

export const deleteMain = async (req: Request, res: Response) => {
  const { userId, mainId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }
    const ejercicio = user.clase?.main.id(mainId);
    if (!ejercicio) {
      return res.status(404).send({ message: "No se encuentra el ejercicio" });
    }

    user.clase?.main.remove(mainId);
    await user.save();
    res.status(200).send({ message: "Ejercicio eliminado" });
  } catch {
    res.status(500).send({ message: "Error al eliminar el ejercicio" });
  }
};

export const createCooldown = async (req: Request, res: Response) => {
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
    user.clase?.cooldown.push(cooldown);

    await user.save();
    res.status(200).json({ message: "ejercicio creado", cooldown });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el ejercicio" });
  }
};

export const deleteCooldown = async (req: Request, res: Response) => {
  const { userId, cooldownId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }
    const ejercicio = user.clase?.cooldown.id(cooldownId);
    if (!ejercicio) {
      return res.status(404).send({ message: "No se encuentra el ejercicio" });
    }

    user.clase?.cooldown.remove(cooldownId);
    await user.save();
    res.status(200).send({ message: "Ejercicio eliminado" });
  } catch {
    res.status(500).send({ message: "Error al eliminar el ejercicio" });
  }
};

export const getWarmup = async (req: Request, res: Response) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const warmup = user.clase?.warmup;
    res.status(200).json(warmup);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el warmup" });
  }
};

export const getMain = async (req: Request, res: Response) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const main = user.clase?.main;
    res.status(200).json(main);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el Main" });
  }
};

export const getCooldown = async (req: Request, res: Response) => {
  const { userId } = req.params; // El ID del usuario logueado se pasa como un parámetro de la URL
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const cooldown = user.clase?.cooldown;
    res.status(200).json(cooldown);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el Cooldown" });
  }
};

export const createObjetive = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const objective = new objetiveModel({ name, description });

    user.clase?.objetive.push(objective);
    await user.save();
    res.status(200).json({ message: "Objetivo creado", objective });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el objetivo" });
  }
};

export const getObjetive = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
    res.status(404).json({ message: "User not found" });
    }
    const objective = user?.clase?.objetive;
    res.status(200).json(objective);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el objetivo" });
  }
};

export const deleteObjetive = async (req: Request, res: Response) => {
  const { userId, objectiveId } = req.params;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "No se encuentra el usuario" });
    }

    const objective = user.clase?.objetive.id(objectiveId);
    if (!objective) {
      return res.status(404).send({ message: "No se encuentra el objetivo" });
    }

    
    user.clase?.objetive.remove(objectiveId);
    await user.save();
    res.status(200).send({ message: "Objetivo eliminado" });
  } catch (error) {
    res.status(400).send({ message: "Error al eliminar el objetivo" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await userModel.find();
  try {
    res.status(200).json(users);
  } catch (error){
    res.status(400).json({ message: "Error al obtener los usuarios" });
  }
};

export const socialLogin = async (req: Request, res: Response) => {
  const { email, name, provider } = req.body;

  try {
    // Verifica si el usuario ya existe
    let user = await userModel.findOne({ email });

    if (!user) {
      // Crea un nuevo usuario si no existe
      user = await userModel.create({
        name,
        email,
        provider,
        password: null, // Para usuarios de autenticación social no necesitas almacenar contraseña
      });
    }

    // Crea un token para el usuario
    const token = createToken({ _id: user._id, email: user.email, name: user.name });

    // Envía la respuesta exitosa
    res.status(200).json({ success: true, token, userId: user._id, user });
  } catch (error) {
    // Captura el error y envía una respuesta de error
    res.status(400).json({ message: "Error al iniciar sesión" });
  }
};


