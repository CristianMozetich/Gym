import React from "react";
import { Avatar } from "@nextui-org/react";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

const AvatarModel = () => {
  const { userName } = useContext(Contexto);


  return (
    <div className="flex gap-3 items-center m-5">
      <Avatar />
      <h1 className="text-3xl font-bold">Bienvenido {userName}</h1>
    </div>
  );
};

export default AvatarModel;
