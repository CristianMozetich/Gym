"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import DeleteIcon from "../../icons/DeleteIcon";

const CoolDownPlan = () => {
  const { cooldown, deleteCooldown } = Fetching();
  return (
    <div className="md:flex m-4 p-4">
      {cooldown.map((ejercicio) => (
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
          <div className="flex justify-end">
            <Button
              onClick={() => deleteCooldown(ejercicio._id)}
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

export default CoolDownPlan;
