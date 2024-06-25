"use client";
import React from "react";
import { Fetching } from "../../api/fetching";

const PersonalInfoForm = () => {
  const { postPersonalInfo } = Fetching();
  return (
    <form onSubmit={postPersonalInfo} className="flex flex-col">
      <input
        className="border max-w-96 p-2 m-2"
        type="text"
        placeholder="Peso"
        name="peso"
      />
      <input
        className="border max-w-96 p-2 m-2"
        type="text"
        placeholder="Altura"
        name="altura"
      />
      <input
        className="border max-w-96 p-2 m-2"
        type="text"
        placeholder="Edad"
        name="edad"
      />
      <input
        className="border max-w-96 p-2 m-2"
        type="text"
        placeholder="Sexo"
        name="sexo"
      />
      <input
        className="border max-w-96 p-2 m-2"
        type="text"
        placeholder="UserId"
        name="userId"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default PersonalInfoForm;
