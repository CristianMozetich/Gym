import { userModel } from "../model/user.model.js";
import { exerciseModel } from "../model/user.model.js";
import { createToken } from "../utils/jwt.js";
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

    console.log('Login exitoso');
    res.status(200).json({ mensaje: 'Login exitoso', token: token });
} catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ mensaje: `Error al iniciar sesión ${error}` });
}
};

export const createExercise = async (req, res) => {
  const { name, description, duration, sets, userId } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }

    const exercise = new exerciseModel({ name, description, duration, sets });

    user.exercises.push(exercise);
    await user.save();
    res.status(200).json({ message: "ejercicio creado", exercise });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
