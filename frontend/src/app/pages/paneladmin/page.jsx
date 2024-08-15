"use client";
import React from "react";
import WarmUpForm from "../../components/WarmUpForm/WarmUp";
import MainForm from "../../components/MainForm/MainForm";
import CoolDownForm from "@/app/components/CoolDownForm/CoolDownForm";
import ObjetiveForm from "@/app/components/ObjetiveForm/ObjetiveForm";
import Objetives from "@/app/components/Objetives/Objetives";
const page = () => {
  return (
    <div className="gap-6 min-h-screen max-w-full">
      <div className="flex gap-2 m-2 p-3">
        <div className="flex flex-col w-1/2 p-2 m-2">
          <h1 className="text-3xl">Crea tus Objetivos</h1>
          <ObjetiveForm />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl m-2 p-2">Objetivos</h1>
          <div className="border rounded-xl flex flex-col items-center">
            <Objetives />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 m-4 p-4">
        <h1 className="text-3xl m-3">Plan de entrenamiento</h1>
        <div className="flex gap-8">
          <div className="w-1/3 flex justify-center">
            <WarmUpForm />
          </div>
          <div className="w-1/3 flex justify-center">
            <MainForm />
          </div>
          <div className="w-1/3 flex justify-center">
            <CoolDownForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
