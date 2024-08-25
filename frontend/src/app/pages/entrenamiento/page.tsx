// components/Page.tsx
"use client";

import React, { useState } from "react";
import WarmUpPlan from "../../components/WarmUpPlan/WarmUpPlan";
import MainPlan from "../../components/MainPlan/MainPlan";
import CoolDownPlan from "../../components/CoolDownPlan/CoolDownPlan";
import LeftIcon from "../../icons/LeftIcon";
import RightIcon from "../../icons/RightIcon";
import { Contexto } from "@/app/context/Contexto";

const Page = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <WarmUpPlan key={0} />,
    <MainPlan key={1} />,
    <CoolDownPlan key={2} />,
  ];

  const { userId, userName } = React.useContext(Contexto);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (direction === "right" && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen relative">
      {!userId ? (
        <h1 className="text-3xl m-2 text-center">
          Debes iniciar sesión para crear tu entrenamiento
        </h1>
      ) : (
        <>
          <h1 className="text-xl m-2">Bienvenido {userName}</h1>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-200 hover:bg-blue-400 transition-all p-2 rounded-full z-10"
            onClick={() => scroll("left")}
          >
            <LeftIcon />
          </button>
          <div className="flex overflow-hidden w-full h-full items-center justify-center">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSection * 100}%)` }}
            >
              <div className="flex-none min-w-full flex justify-center items-center">
                <div className="max-w-[1400px]">
                  <h1 className="text-4xl font-bold text-blue-500">WarmUp</h1>
                  {sections[0]}
                </div>
              </div>
              <div className="flex-none min-w-full flex justify-center items-center">
                <div className="max-w-[1400px]">
                  <h1 className="text-4xl font-bold text-blue-500">Main</h1>
                  {sections[1]}
                </div>
              </div>
              <div className="flex-none min-w-full flex justify-center items-center">
                <div className="max-w-[1400px]">
                  <h1 className="text-4xl font-bold text-blue-500">CoolDown</h1>
                  {sections[2]}
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-200 hover:bg-blue-400 transition-all p-2 rounded-full z-10"
            onClick={() => scroll("right")}
          >
            <RightIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default Page;
