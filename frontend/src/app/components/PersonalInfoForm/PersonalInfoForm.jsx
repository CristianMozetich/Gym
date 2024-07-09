"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
const PersonalInfoForm = () => {
  const { postPersonalInfo } = Fetching();
  const formRef = useRef();
  return (
    <form ref={formRef} onSubmit={postPersonalInfo} className="flex flex-col">
      <Input
        className="max-w-96 p-2 m-2"
        type="text"
        placeholder="Peso"
        name="peso"
      />
      <Input
        className="max-w-96 p-2 m-2"
        type="text"
        placeholder="Altura"
        name="altura"
      />
      <Input
        className="max-w-96 p-2 m-2"
        type="text"
        placeholder="Edad"
        name="edad"
      />
      <Input
        className="max-w-96 p-2 m-2"
        type="text"
        placeholder="Sexo"
        name="sexo"
      />
      <Button className="m-4" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
