import { Schema, model } from "mongoose";

const objetiveSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


const warmupSchema = new Schema({
  ejercicioUno: {
    type: String,
    required: true,
  },
  ejercicioDos: {
    type: String,
    required: true,
  },
  ejercicioTres: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  sets: {
    type: String,
    required: true,
  },
  rest: {
    type: String,
    required: true,
  },
});

const mainSchema = new Schema({
  ejercicioUno: {
    type: String,
    required: true,
  },
  ejercicioDos: {
    type: String,
    required: true,
  },
  ejercicioTres: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  sets: {
    type: String,
    required: true,
  },
  rest: {
    type: String,
    required: true,
  },
});

const cooldownSchema = new Schema({
  ejercicioUno: {
    type: String,
    required: true,
  },
  ejercicioDos: {
    type: String,
    required: true,
  },
  ejercicioTres: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  sets: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clase: {
    objetive: [objetiveSchema],
    warmup: [warmupSchema],
    main: [mainSchema],
    cooldown: [cooldownSchema],
  }, 
});

export const userModel = model("User", userSchema);
export const warmupModel = model("Warmup", warmupSchema);
export const mainModel = model("Main", mainSchema);
export const cooldownModel = model("Cooldown", cooldownSchema);
export const objetiveModel = model("Objetive", objetiveSchema);
