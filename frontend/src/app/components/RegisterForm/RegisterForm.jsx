"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";
import { Validation } from "../../components/RegisterForm/validation";

const Register = () => {
  const formRef = useRef();
  const { errorBlurName, onBlurName, errorBlurEmail, onBlurEmail } = Validation();

  const { postDataRegister } = Fetching();
  return (
    <form ref={formRef} onSubmit={postDataRegister} className="flex flex-col max-w-96 items-center">
      <input
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        name="name"
        placeholder="name"
        onBlur={onBlurName}
      />
      <p className="text-red-500">{errorBlurName}</p>
      <input
        className="border border-solid rounded-lg m-2 p-2"
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className="border border-solid rounded-lg m-2 p-2"
        type="email"
        name="email"
        placeholder="email"
        onBlur={onBlurEmail}
      />
      <p className="text-red-500">{errorBlurEmail}</p>
      <input
        className="border border-solid rounded-lg m-2 p-2"
        type="text"
        name="age"
        placeholder="age"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white w-52 font-bold py-2 px-4 rounded" type="submit">Registrarme</button>
    </form>
  );
};

export default Register;
