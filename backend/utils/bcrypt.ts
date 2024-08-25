import bcrypt from "bcrypt";
import "dotenv/config";

const saltRounds: number = parseInt(process.env.SALT || "12");

export const createHash = (password: string) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
};

export const validatePassword = (passwordSend: string, passwordDB: string) => {
  return bcrypt.compareSync(passwordSend, passwordDB);
};
