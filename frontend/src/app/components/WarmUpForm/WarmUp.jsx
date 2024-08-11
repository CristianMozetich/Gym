"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const WarmUpForm = () => {
  const formRef = useRef();
  const { postWarmup } = Fetching();

  return (
    <div>
      <h1>WarmUp</h1>
      <form
        ref={formRef}
        onSubmit={postWarmup}
        className="flex flex-col max-w-96  items-center"
      >
        <Input
          name="name"
          className="rounded-lg m-2 p-2"
          type="text"
          placeholder="name"
        />
        <Input
          name="description"
          className="rounded-lg m-2 p-2"
          type="text"
          placeholder="description"
        />
        <Input
          name="duration"
          className="rounded-lg m-2 p-2"
          type="string"
          placeholder="duration"
        />
        <Input
          name="sets"
          className="rounded-lg m-2 p-2"
          type="string"
          placeholder="sets"
        />
        <Input
          name="rest"
          className="rounded-lg m-2 p-2"
          type="string"
          placeholder="rest"
        />
        <Input
          name="userId"
          type="text"
          placeholder="userId"
          className="rounded-lg m-2 p-2"
        />
        <Button type="submit" className="w-42" color="primary">
          Create
        </Button>
      </form>
    </div>
  );
};

export default WarmUpForm;
