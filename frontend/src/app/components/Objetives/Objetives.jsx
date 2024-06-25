"use client";
import React from "react";
import { Fetching } from "../../api/fetching";

const Objetives = () => {
  const { objetivos } = Fetching();
  return (
    <div className="m-3 p-3">
      {objetivos.map((obj) => {
        return (
          <div className="m-2 p-2 flex flex-col" key={obj._id}>
            <span className="font-bold">{obj.name}</span>
            <span>{obj.description}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Objetives;
