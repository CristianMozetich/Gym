"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
const PersonalInfoForm = () => {
  const { postPersonalInfo } = Fetching();
  return (
    <>
      <form onSubmit={postPersonalInfo} className="flex flex-col">
        <Input
          className="border max-w-96 p-2 m-2"
          type="text"
          placeholder="Peso"
          name="peso"
        />
        <Input
          className="border max-w-96 p-2 m-2"
          type="text"
          placeholder="Altura"
          name="altura"
        />
        <Input
          className="border max-w-96 p-2 m-2"
          type="text"
          placeholder="Edad"
          name="edad"
        />
        <Input
          className="border max-w-96 p-2 m-2"
          type="text"
          placeholder="Sexo"
          name="sexo"
        />
        <Input
          className="border max-w-96 p-2 m-2"
          type="text"
          placeholder="UserId"
          name="userId"
        />
      </form>
      <Button className="m-4" color="primary" type="submit">
        Enviar
      </Button>
    </>
  );
};

export default PersonalInfoForm;
