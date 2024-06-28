"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const ExercisesForm = () => {
  const formRef = useRef();
  const { postEjercicios } = Fetching();
  
  return (
    <form ref={formRef} onSubmit={postEjercicios} className="flex flex-col max-w-96 items-center">
      <Input
        name="name"
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        placeholder="name"
      />
      <Input
        name="description"
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        placeholder="description"
      />
      <Input
        name="duration"
        className="border border-solid rounded-lg m-2 p-2"
        type="number"
        placeholder="duration"
      />
      <Input
        name="sets"
        className="border border-solid rounded-lg m-2 p-2"
        type="number"
        placeholder="sets"
      />
      <Input
        name="userId"
        type="text"
        placeholder="userId"
        className="border border-solid rounded-lg m-2 p-2"
      />
      <Button type="submit" className="w-42" color="primary">Create</Button>
    </form>
  );
};

export default ExercisesForm;
