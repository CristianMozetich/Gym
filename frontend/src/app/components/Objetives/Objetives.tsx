"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";

const Objetives = () => {
  const { objetivos, deleteObjetive, getObjetivos } = Fetching();

  useEffect(() => {
    getObjetivos();
  }, [getObjetivos]);
  
  return (
    <div className="m-3 p-3">
      {objetivos.map((obj) => {
        return (
          <>
            <div className="flex items-center">
              <div className="m-2 p-2 flex flex-col" key={obj._id}>
                <h1 className="font-bold">{obj.name}</h1>
                <p>{obj.description}</p>
              </div>
              <Button color="danger" onClick={() => deleteObjetive(obj._id)}>Eliminar</Button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Objetives;
