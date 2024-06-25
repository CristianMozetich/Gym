"use client";
import React from "react";
import { Fetching } from "../../api/fetching";

const ObjetiveForm = () => {
  const { postObjetivos } = Fetching();
  return (
    <form className="flex flex-col max-w-96 items-center" onSubmit={postObjetivos}>
      <input className="border p-2 m-2 rounded-md" name="name" type="text" placeholder="Name"/>
      <input className="border p-2 m-2 rounded-md" name="description" type="text" placeholder="Description"/>
      <input className="border p-2 m-2 rounded-md" name="userId" type="text" placeholder="userId"/>
      <button className="rounded-lg bg-blue-500 text-white p-2 w-32 h-9" type="submit">Enviar</button>
    </form>
  );
};

export default ObjetiveForm;
