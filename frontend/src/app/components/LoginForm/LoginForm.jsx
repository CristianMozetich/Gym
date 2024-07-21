"use client";
import React from "react";
import { useRef } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FetchLogin } from "./fetchLogin";
const Login = () => {
  const formRef = useRef();
  const { handleSubmit } = FetchLogin();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col max-w-96 items-center m-4"
    >
      <Input
        type="text"
        name="email"
        placeholder="email"
        className="rounded-lg m-2 w-80"
      />
      <Input
        type="text"
        name="password"
        placeholder="password"
        className="rounded-lg m-2  w-80"
      />
      <Button className="w-80 bg-button text-slate-50" type="submit">
        Iniciar Sesion
      </Button>
    </form>
  );
};

export default Login;
