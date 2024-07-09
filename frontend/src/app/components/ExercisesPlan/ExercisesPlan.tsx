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
const ExercisesPlan = () => {
  const { ejercicios } = Fetching();

  return (
    <>
      {ejercicios.map((ejercicio) => (
        <Card key={ejercicio._id} className="max-w-[400px] m-3">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{ejercicio.name}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{ejercicio.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>cantidad: {ejercicio.duration}</p>
          </CardFooter>
          <Divider />
          <CardFooter>
            <p>sets: {ejercicio.sets}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ExercisesPlan;
