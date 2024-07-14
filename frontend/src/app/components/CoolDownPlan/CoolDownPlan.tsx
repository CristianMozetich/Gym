"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

const CoolDownPlan = () => {
  const { cooldown } = Fetching();
  return (
    <div className="flex h-full max-h-screen m-4 p-4">
      <div>
        <h1 className="text-5xl font-bold text-blue-500">Cooldown</h1>
      </div>
      {cooldown.map((ejercicio) => (
        <Card key={ejercicio._id} className="max-w-[400px] min-w-[300px] m-3">
          <CardHeader className="flex">
            <div className="flex flex-col gap-4 m-3">
              <p className="text-xl">{ejercicio.name}</p>
              <p className="text-xl">{ejercicio.description}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex gap-4 m-4 flex-col items-start">
              <p className="text-xl">Cantidad: {ejercicio.duration}</p>
              <p className="text-xl">Repeticiones: {ejercicio.reps}</p>
              <p className="text-xl">Sets: {ejercicio.sets}</p>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="m-3 flex flex-col">
              <p className="text-xl">Descanso: {ejercicio.rest}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CoolDownPlan;
