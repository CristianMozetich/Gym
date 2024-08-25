import { validatePassword, createHash } from "./bcrypt";
import { userModel } from "../model/user.model";
import passport from "passport";
import local from "passport-local";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  // Estrategia Local para registro
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        passwordField: "password",
      },
      async (req, email, password, done) => {
        const { name } = req.body;
        try {
          const user = await userModel.findOne({ email });
          if (user) {
            return done(null, false, { message: "Email already registered" });
          }

          const passwordHash = await createHash(password);
          const newUser = await userModel.create({
            name,
            password: passwordHash,
            email,
          });

          done(null, newUser);
        } catch (error) {
          console.log('Error al crear el usuario:', error);
          done(error);
        }
      }
    )
  );

  // Estrategia Local para inicio de sesión
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
            return done(null, false, { message: "User not found" });
          }
          if (typeof user.password !== 'string') {
            return done(null, false, { message: "User password is invalid" });
          }
          const isPasswordValid = await validatePassword(password, user.password);
          if (!isPasswordValid) {
            return done(null, false, { message: "Incorrect password" });
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );


  // Inicializar la sesión del usuario
  passport.serializeUser((user: any, done) => {
    done(null, user._id);
  });

  // Deserializar la sesión del usuario
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

export default initializePassport;
