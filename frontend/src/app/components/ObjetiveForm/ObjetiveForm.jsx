"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const ObjetiveForm = () => {
  const { postObjetivos } = Fetching();
  return (
    <form className="flex flex-col max-w-96 items-center" onSubmit={postObjetivos}>
      <Input className="border p-2 m-2 rounded-md" name="name" type="text" placeholder="Name"/>
      <Input className="border p-2 m-2 rounded-md" name="description" type="text" placeholder="Description"/>
      <Input className="border p-2 m-2 rounded-md" name="userId" type="text" placeholder="userId"/>
      <Button className="p-2 w-32 h-9" color="primary" type="submit">Enviar</Button>
    </form>
  );
};

export default ObjetiveForm;
