"use client";
import React from "react";
import { Fetching } from "../../api/fetching";
import { useRef } from "react";
import { Validation } from "./validation";
import { Input } from "@nextui-org/react";
import { Button, Divider } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/app/icons/GoogleIcon";
import FaceIcon from "@/app/icons/FaceIcon";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    errorBlurName,
    onBlurName,
    errorBlurEmail,
    onBlurEmail,
    errorBlurPassword,
    onBlurPassword,
  } = Validation();

  const { postDataRegister } = Fetching();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      ref={formRef}
      onSubmit={postDataRegister}
      className="absolute m-4 md:w-1/2 h-5/6 flex items-center justify-center flex-col rounded-xl right-3 bg-slate-200 dark:bg-slate-900"
    >
      <div className="max-w-96 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-button dark:text-slate-100">
            180{" "}
            <span className="text-blue-500 dark:text-green-500">FUNCIONAL</span>
          </h1>
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
          onChange={onBlurName}
        />
        <p className="text-red-500">{errorBlurName}</p>

        {/* Contenedor para el campo de contraseña con el botón de visibilidad */}
        <div className="relative w-full">
          <Input
            className="rounded-lg p-2 w-full"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            onChange={onBlurPassword}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <p className="text-red-500">{errorBlurPassword}</p>

        <Input
          className="rounded-lg m-2 p-2"
          type="email"
          name="email"
          placeholder="email"
          onChange={onBlurEmail}
        />
        <p className="text-red-500">{errorBlurEmail}</p>

        <Button
          className="w-80 m-2 bg-button text-slate-50"
          color="primary"
          type="submit"
        >
          Registrarme
        </Button>

        <Divider />

        <Button
          className="w-80 m-2 bg-button text-slate-50"
          color="primary"
          onClick={() => signIn("google")}
        >
          <GoogleIcon />
          Ingresa con Google
        </Button>

        <Button
          className="w-80 m-2 bg-button text-slate-50"
          color="primary"
          onClick={() => signIn("facebook")}
        >
          <FaceIcon />
          Ingresa con Facebook
        </Button>
      </div>
    </form>
  );
};

export default Register;

