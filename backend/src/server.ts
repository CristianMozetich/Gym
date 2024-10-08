import express from "express";
import "dotenv/config";
import userRouter from "./routes/user.routes";
import mongoose from "mongoose";
import initializePassport from "./utils/passport";
import passport from "passport";
import session from "express-session";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: ["https://180funcional.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
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
