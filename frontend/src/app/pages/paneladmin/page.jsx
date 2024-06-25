import React from "react";
import ExercisesForm from "../../components/ExercisesForm/ExercisesForm";
import Objetives from "../../components/Objetives/Objetives";
const page = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col items-center m-4 p-4">
        <h1 className="text-3xl m-3">Objetivos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit hic quos obcaecati, enim ad aperiam doloremque deleniti a dolores.</p>
        <Objetives/>
      </div>
      <div className="flex flex-col items-center m-4 p-4">
        <h1 className="text-3xl m-3">Plan de entrenamiento</h1>
        <ExercisesForm />
      </div>
    </div>
  );
};
export default page;
