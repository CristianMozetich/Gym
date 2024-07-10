"use client";
import React from "react";
import ExercisesForm from "../../components/ExercisesForm/ExercisesForm";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import GetUsersAdmin from "../../components/GetUsersAdmin/GetUsersAdmin";
const page = () => {
  return (
    <div className="grid grid-cols-2 gap-6 min-h-screen max-w-full">
      <div className="flex flex-col gap-4 items-center m-4 p-4">
        <h1 className="text-3xl">Objetivos</h1>
        <GetUsersAdmin />
      </div>
      <div className="flex flex-col items-center m-4 p-4">
        <h1 className="text-3xl m-3">Plan de entrenamiento</h1>
        <ExercisesForm />
      </div>
      <div className="flex flex-col items-center m-4 p-4">
        <h1 className="text-3xl m-3 font-bold">Personal info</h1>
        <PersonalInfo />
      </div>
    </div>
  );
};
export default page;
