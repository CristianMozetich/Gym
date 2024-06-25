import { Schema, model } from "mongoose";

const infoSchema = new Schema ({
  peso: {
    type: Number,
    required: true,
  },
  altura: {
    type: Number,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
})

const exerciseSchema = new Schema({
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
})

const objetiveSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

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
  age: {
    type: String,
    required: true,
  },
  exercises: [exerciseSchema],
  objetive: [objetiveSchema],
  info: [infoSchema],
});

export const userModel = model("User", userSchema);
export const exerciseModel = model("Exercise", exerciseSchema);
export const objetiveModel = model("Objetive", objetiveSchema);
export const infoModel = model("Info", infoSchema);


