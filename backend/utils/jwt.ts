import jwt from "jsonwebtoken";
import "dotenv/config";

export const createToken = (user: any) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });

  console.log(token);
  return token;
};
