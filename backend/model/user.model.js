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
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  rest: {
    type: Number,
    required: true,
  },
});

const mainSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  rest: {
    type: Number,
    required: true,
  },
});

const cooldownSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  rest: {
    type: Number,
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
  objetive: [objetiveSchema],
  warmup: [warmupSchema],
  main: [mainSchema],
  cooldown: [cooldownSchema], // Array de LA CLASE
});

export const userModel = model("User", userSchema);
export const warmupModel = model("Warmup", warmupSchema);
export const mainModel = model("Main", mainSchema);
export const cooldownModel = model("Cooldown", cooldownSchema);
export const objetiveModel = model("Objetive", objetiveSchema);

