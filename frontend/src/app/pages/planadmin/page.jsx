import React from "react";
import PlanForm from "../../components/ExercisesForm/ExercisesForm";
const page = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="m-4">
        <h1>Plan de entrenamiento</h1>
      </div>
      <PlanForm />
    </div>
  );
};
export default page;
