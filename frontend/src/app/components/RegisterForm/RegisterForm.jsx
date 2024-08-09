"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";
import { Validation } from "../../components/RegisterForm/validation";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Register = () => {
  const formRef = useRef();
  const { errorBlurName, onBlurName, errorBlurEmail, onBlurEmail } =
    Validation();

  const { postDataRegister } = Fetching();
  return (
    <form
      ref={formRef}
      onSubmit={postDataRegister}
      className="absolute m-4 w-1/2 h-5/6 flex items-center justify-center flex-col rounded-xl right-3 bg-slate-200 dark:bg-slate-900"
    >
      <div className="max-w-96 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-slate-800 dark:text-slate-200">180 FUNCIONAL</h1>
          <h3 className="text-slate-800 dark:text-slate-200 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            neque?
          </h3>
        </div>
        <Input
          className="rounded-lg m-2 p-2"
          type="text"
          name="name"
          placeholder="name"
          onBlur={onBlurName}
        />
        <p className="text-red-500">{errorBlurName}</p>
        <Input
          className="rounded-lg m-2 p-2"
          type="password"
          name="password"
          placeholder="password"
        />
        <Input
          className="rounded-lg m-2 p-2"
          type="email"
          name="email"
          placeholder="email"
          onBlur={onBlurEmail}
        />
        <p className="text-red-500">{errorBlurEmail}</p>
        <Button className="w-80 bg-button text-slate-50" color="primary" type="submit">
          Registrarme
        </Button>
      </div>
    </form>
  );
};

export default Register;
