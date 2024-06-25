"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
const ExercisesPlan = () => {
  const { ejercicios } = Fetching();

  return (
    <div>
      {ejercicios.map((ejercicio) => {
        return (
          <div key={ejercicio._id}>
            <h1>{ejercicio.name}</h1>
            <p>{ejercicio.description}</p>
            <p>{ejercicio.duration}</p>
            <p>{ejercicio.sets}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExercisesPlan;
