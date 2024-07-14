"use client";
import React from "react";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import GetUsersAdmin from "../../components/GetUsersAdmin/GetUsersAdmin";
import WarmUpForm from "../../components/WarmUpForm/WarmUp";
import MainForm from "../../components/MainForm/MainForm";
import CoolDownForm from "@/app/components/CoolDownForm/CoolDownForm";
const page = () => {
  return (
    <div className="grid  gap-6 min-h-screen max-w-full">
      <div className="flex flex-col m-4 p-4">
        <h1 className="text-3xl m-3 font-bold">Personal info</h1>
        <PersonalInfo />
      </div>
      <div className="flex flex-col gap-4cd m-4 p-4">
        <h1 className="text-3xl">Objetivos</h1>
        <GetUsersAdmin />
      </div>
      <div className="flex flex-col gap-4 m-4 p-4">
        <h1 className="text-3xl m-3">Plan de entrenamiento</h1>
        <div className="grid grid-cols-3">
          <WarmUpForm />
          <MainForm />
          <CoolDownForm />
        </div>
      </div>
    </div>
  );
};
export default page;
