import { validatePassword, createHash } from "./bcrypt.js";
import { userModel } from "../model/user.model.js";
import passport from "passport";
import local from "passport-local";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        passwordField: "password",
      },
      async (req, email, password, done) => {
        const { name, age } = req.body;
        try {
          const user = await userModel.findOne({ email });
          if (user) {
            return done(null, false);
          } else {
            const passwordHash = createHash(password);
            const newUser = await userModel.create({
              name,
              password: passwordHash,
              email,
              age,
            });
            const result = newUser;
            done(null, result);
          }
        } catch (error) {
          console.log('error al crear el usuario', error);
        }
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        passwordField: "password",
      },
      async (req, email, password, done) => {
        try {
          const user = await userModel.findOne({ email });
          if (!user) {
            return done(null, false);
          }
          if (!validatePassword(password, user.password)) {
            return done(null, false);
          }
          done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  //INICIALIZAR LA SESION DEL USUARIO
  passport.serializeUser((email, done) => {
    done(null, email);
  });

  //ELIMINAR LA SESION DEL USUARIO
  passport.deserializeUser(async (email, done) => {
    const user = await userModel.findById(email);
    done(null, user);
  });
};

export default initializePassport;
