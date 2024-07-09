"use client";
import React from "react";
import PersonalInfoForm from "../../components/PersonalInfoForm/PersonalInfoForm";
import AvatarModel from "../../components/Avatar/Avatar";
import Objetives from "@/app/components/Objetives/Objetives";
import ObjetiveForm from "@/app/components/ObjetiveForm/ObjetiveForm";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <AvatarModel />
      </div>
      <div className="grid grid-cols-2 gap-6 min-h-screen max-w-full">
        <div className="flex flex-col items-end justify-center m-3">
          <div className="max-w-xl m-3">
            <h1 className="text-start tracking-wider text-xl">
              Queremos ayudarte a alcanzar tus metas de la manera más efectiva
              posible. Para hacerlo, necesitamos conocer un poco más sobre ti y
              tus objetivos físicos. Por favor, completa el siguiente
              formulario. Esto nos permitirá diseñar un plan de entrenamiento
              personalizado que se ajuste a tus necesidades y te ayude a lograr
              tus objetivos.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/img/objetivos.jpg"
            alt="logo"
            width={350}
            height={350}
            className="rounded-xl shadow-md"
          ></Image>
        </div>

        <div className="flex flex-col items-center h-screen justify-center">
          <h1 className="text-2xl font-bold">INFORMACIÓN PERSONAL</h1>
          <PersonalInfoForm />
        </div>
        <div className="flex flex-col gap-4 items-center h-screen justify-center">
          <div>
            <h1 className="text-2xl font-bold">¿CUALES SON TUS OBJETIVOS?</h1>
            <ObjetiveForm />
          </div>
          <div className="flex flex-col items-center m-5">
            <h1 className="text-2xl font-bold">MIS OBJETIVOS</h1>
            <Objetives />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
