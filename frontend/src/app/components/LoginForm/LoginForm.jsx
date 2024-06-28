"use client";
import React from "react";
import { useRef } from "react";
import { Fetching } from "../../api/fetching";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
const Login = () => {
  const formRef = useRef();
  const { postDataLogin } = Fetching();

  return (
    <form
      ref={formRef}
      onSubmit={postDataLogin}
      className="flex flex-col max-w-96 items-center"
    >
      <Input
        type="text"
        name="email"
        placeholder="email"
        className="border border-solid rounded-lg m-2 p-2"
      />
      <Input
        type="text"
        name="password"
        placeholder="password"
        className="border border-solid rounded-lg m-2 p-2"
      />
      <Button className="w-42" color="primary" type="submit">
        Iniciar Sesion
      </Button>
    </form>
  );
};

export default Login;
