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

  const { userId } = React.useContext(Contexto);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (direction === "right" && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col relative w-full h-full">
      {!userId ? (
        <h1 className="text-3xl m-2 p-2 text-center">
          Debes iniciar sesión para crear tu entrenamiento
        </h1>
      ) : (
        <>
          {/* Botón de desplazamiento izquierdo */}
          <button
            className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-200 hover:bg-blue-400 transition-all p-2 rounded-full z-10"
            onClick={() => scroll("left")}
          >
            <LeftIcon />
          </button>

          {/* Contenedor principal para las secciones */}
          <div className="flex overflow-hidden w-full h-full items-center justify-center">
            <div
              className="flex md:flex-row flex-col transition-transform duration-500 ease-in-out w-full h-full"
              style={{
                transform: `translateX(-${currentSection * 100}%)`,
              }}
            >
              {/* WarmUp Section */}
              <div className="flex-none w-full h-full md:min-h-screen p-4 flex justify-center items-center">
                <div className="max-w-[1400px] w-full flex flex-col items-center">
                  <h1 className="text-4xl font-bold text-blue-500 text-center">
                    WarmUp
                  </h1>
                  <div className="mt-4 w-full items-center justify-center flex">{sections[0]}</div>
                </div>
              </div>

              {/* Main Section */}
              <div className="flex-none w-full h-full md:min-h-screen p-4 flex justify-center items-center">
                <div className="max-w-[1400px] w-full flex flex-col items-center">
                  <h1 className="text-4xl font-bold text-blue-500 text-center">
                    Main
                  </h1>
                  <div className="mt-4 w-full items-center justify-center flex">{sections[1]}</div>
                </div>
              </div>

              {/* CoolDown Section */}
              <div className="flex-none w-full h-full md:min-h-screen p-4 flex justify-center items-center">
                <div className="max-w-[1400px] w-full flex flex-col items-center">
                  <h1 className="text-4xl font-bold text-blue-500 text-center">
                    CoolDown
                  </h1>
                  <div className="mt-4 w-full items-center justify-center flex">{sections[2]}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de desplazamiento derecho */}
          <button
            className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-200 hover:bg-blue-400 transition-all p-2 rounded-full z-10"
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
