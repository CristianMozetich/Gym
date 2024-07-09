"use client";
import React from "react";
import { Fetching } from "../../api/fetching";

const Objetives = () => {
  const { objetivos, deleteObjetive } = Fetching();
  return (
    <div className="m-3 p-3">
      {objetivos.map((obj) => {
        return (
          <>
            <div className="flex">
              <div className="m-2 p-2 flex flex-col" key={obj._id}>
                <h1 className="font-bold">{obj.name}</h1>
                <p>{obj.description}</p>
              </div>
              <button onClick={() => deleteObjetive(obj._id)}>Eliminar</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Objetives;
