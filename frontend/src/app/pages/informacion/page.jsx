"use client";
import React from "react";
import PersonalInfoForm from "../../components/PersonalInfoForm/PersonalInfoForm";
import AvatarModel from "../../components/Avatar/Avatar";
import Objetives from "@/app/components/Objetives/Objetives";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <AvatarModel />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <h1>Información Personal</h1>
          <PersonalInfoForm />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>Mis Objetivos</h1>
          <Objetives />
        </div>
      </div>
    </div>
  );
};

export default page;
