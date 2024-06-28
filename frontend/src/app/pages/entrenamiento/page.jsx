import React from "react";
import ExercisesPlan from "../../components/ExercisesPlan/ExercisesPlan";
const page = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-500 m-4 p-3">
        Plan de entrenamiento
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <ExercisesPlan />
        <ExercisesPlan />
        <ExercisesPlan />
      </div>
    </div>
  );
};

export default page;
