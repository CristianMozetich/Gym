"use client";
import React from "react";
import { useRef } from "react";
import { Fetching } from "../../api/fetching";
const Login = () => {
  const formRef = useRef();
  const { postDataLogin } = Fetching();

  return (
    <form ref={formRef} onSubmit={postDataLogin} className="flex flex-col max-w-96 items-center">
      <input
        type="text"
        name="email"
        placeholder="email"
        className="border border-solid rounded-lg m-2 p-2"
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        className="border border-solid rounded-lg m-2 p-2"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white w-52 font-bold py-2 px-4 rounded" type="submit">Iniciar Sesion</button>
    </form>
  );
};

export default Login;
