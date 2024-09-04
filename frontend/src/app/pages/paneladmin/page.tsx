"use client";
import React from "react";
import WarmUpForm from "../../components/WarmUpForm/WarmUp";
import MainForm from "../../components/MainForm/MainForm";
import CoolDownForm from "@/app/components/CoolDownForm/CoolDownForm";
import ObjetiveForm from "@/app/components/ObjetiveForm/ObjetiveForm";
import Objetives from "@/app/components/Objetives/Objetives";
import { Contexto } from "@/app/context/Contexto";
const Page = () => {
  const { userName } = React.useContext(Contexto);
  return (
    <div className="gap-2 min-h-screen max-w-full">
      <div className="md:flex h-screen items-center gap-8 justify-center">
        <h1 className="text-2xl text-center p-2 m-2">Bienvenido {userName}</h1>
        <div className="flex flex-col items-center  md:items-center p-2 m-2">
          <h1 className="text-3xl">Crea tus Objetivos</h1>
          <ObjetiveForm />
        </div>
        <div className=" items-center flex flex-col md:items-center m-2 p-2">
          <h1 className="text-3xl m-2 p-2">Objetivos</h1>
          <div className="border rounded-xl flex flex-col items-start max-w-96 min-w-96">
            <Objetives />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 m-4 p-4">
        <h1 className="text-3xl text-center m-3 p-2">Plan de entrenamiento</h1>
        <div className="md:flex gap-8">
          <div className="md:w-1/3 flex justify-center">
            <WarmUpForm />
          </div>
          <div className="md:w-1/3 flex justify-center">
            <MainForm />
          </div>
          <div className="md:w-1/3 flex justify-center">
            <CoolDownForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
