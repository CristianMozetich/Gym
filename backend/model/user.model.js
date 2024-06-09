import { Schema, model } from "mongoose";


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
    type: Number,
    required: true,
  },
  exercises: [exerciseSchema],
});

export const userModel = model("User", userSchema);
export const exerciseModel = model("Exercise", exerciseSchema);


