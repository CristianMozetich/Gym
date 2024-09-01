"use client";
import React from "react";
import { useRef } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FetchLogin } from "./fetchLogin";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSubmit } = FetchLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

      {/* Contenedor relativo para el campo de contraseña y el botón de visibilidad */}
      <div className="relative w-80">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="password"
          className="rounded-lg w-full"
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>

      <Button className="w-80 bg-button text-slate-50 m-2" type="submit">
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default Login;
