"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";

const ExercisesForm = () => {
  const formRef = useRef();
  const { postEjercicios } = Fetching();
  
  return (
    <form ref={formRef} onSubmit={postEjercicios} className="flex flex-col max-w-96 items-center">
      <input
        name="name"
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        placeholder="name"
      />
      <input
        name="description"
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        placeholder="description"
      />
      <input
        name="duration"
        className="border border-solid rounded-lg m-2 p-2"
        type="number"
        placeholder="duration"
      />
      <input
        name="sets"
        className="border border-solid rounded-lg m-2 p-2"
        type="number"
        placeholder="sets"
      />
      <input
        name="userId"
        type="text"
        placeholder="userId"
        className="border border-solid rounded-lg m-2 p-2"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-52 font-bold py-2 px-4 rounded">Create</button>
    </form>
  );
};

export default ExercisesForm;
