"use client";
import React from "react";
import PersonalInfoForm from "../../components/PersonalInfoForm/PersonalInfoForm";
import AvatarModel from "../../components/Avatar/Avatar";
import Objetives from "@/app/components/Objetives/Objetives";
import ObjetiveForm from "@/app/components/ObjetiveForm/ObjetiveForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center  h-screen">
        <div className="flex ">
          <AvatarModel />
        </div>
        <div className="flex ">
          <h1 className="text-start max-w-xl tracking-wider text-2xl m-3">
            Queremos ayudarte a alcanzar tus metas de la manera más efectiva
            posible. Para hacerlo, necesitamos conocer un poco más sobre ti y
            tus objetivos físicos. Por favor, completa el siguiente formulario
            con la mayor precisión posible. Esto nos permitirá diseñar un plan
            de entrenamiento personalizado que se ajuste a tus necesidades y te
            ayude a lograr tus metas.
          </h1>
          <Image
            src="/img/objetivos.jpg"
            alt="logo"
            width={350}
            height={350}
            className="rounded-xl shadow-md"
          ></Image>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full h-screen">
        <div className="flex flex-col items-center ">
          <h1>Información Personal</h1>
          <PersonalInfoForm />
        </div>
        <div className="flex flex-col gap-4 items-center ">
          <div>
            <h1>cuales son tus objetivos</h1>
            <ObjetiveForm />
          </div>
          <div>
            <h1>Mis Objetivos</h1>
            <Objetives />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
