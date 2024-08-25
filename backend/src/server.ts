import express from "express";
import "dotenv/config";
import userRouter from "../src/routes/user.routes";
import mongoose from "mongoose";
import initializePassport from "../src/utils/passport";
import passport from "passport";
import session from "express-session";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "https://180funcional.vercel.app/", // Reemplaza esto con la URL de tu aplicación frontend
    methods: ["GET", "POST", "DELETE", "PUT"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Encabezados permitidos
  })
);
app.use(
  session({
    secret: process.env.SESSION || "",
    resave: false,
    saveUninitialized: false,
  })
);

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log(`app conectada al puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("bienvenido al backend del gimnasio");
});

app.use("/", userRouter);

const mongoUrl = process.env.MONGO_URL || "";

mongoose
  .connect(mongoUrl, {
    dbName: "gimnasio",
  })
  .then(() => {
    console.log("base de datos conectada");
  })
  .catch((error) => {
    console.log("error al conectar a la base de datos", error);
  });
