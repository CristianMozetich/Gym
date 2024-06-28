"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";
import { Validation } from "../../components/RegisterForm/validation";
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Register = () => {
  const formRef = useRef();
  const { errorBlurName, onBlurName, errorBlurEmail, onBlurEmail } = Validation();

  const { postDataRegister } = Fetching();
  return (
    <form ref={formRef} onSubmit={postDataRegister} className="flex flex-col max-w-96 items-center">
      <Input
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        name="name"
        placeholder="name"
        onBlur={onBlurName}
      />
      <p className="text-red-500">{errorBlurName}</p>
      <Input
        className="border border-solid rounded-lg m-2 p-2"
        type="password"
        name="password"
        placeholder="password"
      />
      <Input
        className="border border-solid rounded-lg m-2 p-2"
        type="email"
        name="email"
        placeholder="email"
        onBlur={onBlurEmail}
      />
      <p className="text-red-500">{errorBlurEmail}</p>
      <Input
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        name="age"
        placeholder="age"
      />
      <Button className="w-42" color="primary" type="submit">Registrarme</Button>
    </form>
  );
};

export default Register;
