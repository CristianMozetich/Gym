"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import DeleteIcon from "../../icons/DeleteIcon";

const MainPlan = () => {
  const { main, deleteMain } = Fetching();
  return (
    <div className="flex h-full max-h-screen m-4 p-4">
      {main.map((ejercicio) => (
        <Card key={ejercicio._id} className="max-w-[600px] min-w-[300px] m-3">
          <CardHeader className="flex">
            <div className="flex flex-col gap-4 m-3">
              <p className="text-2xl text-blue-500 font-semibold tracking-wider">
                1- {ejercicio.ejercicioUno}
              </p>
              <p className="text-2xl text-blue-500 font-semibold tracking-wider">
                2- {ejercicio.ejercicioDos}
              </p>
              <p className="text-2xl text-blue-500 font-semibold tracking-wider">
                3- {ejercicio.ejercicioTres}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex gap-4 m-4 flex-col items-start">
              <p className="text-2xl">
                <span className="text-green-400">Duración: </span>
                {ejercicio.duration}
              </p>
              <p className="text-2xl">
                <span className="text-green-400">Sets: </span>
                {ejercicio.sets}
              </p>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="m-3 flex flex-col">
              <p className="text-2xl">
                <span className="text-green-400">Descanso: </span>
                {ejercicio.rest}
              </p>
            </div>
          </CardFooter>
          <div className="flex justify-end">
            {" "}
            <Button
              onClick={() => deleteMain(ejercicio._id)}
              color="danger"
              className="m-2"
            >
              <DeleteIcon />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MainPlan;
