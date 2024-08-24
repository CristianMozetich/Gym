import bcrypt from "bcrypt";
import "dotenv/config";

const saltRounds: number = parseInt(process.env.SALT || "12");

export const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
};

export const validatePassword = (passwordSend, passwordDB) => {
  return bcrypt.compareSync(passwordSend, passwordDB);
};
