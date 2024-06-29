import React from "react";
import { Avatar } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { Contexto } from "../../context/Contexto";

const AvatarModel = () => {
  const { userId } = useContext(Contexto);


  return (
    <div className="flex gap-3 items-center m-3">
      <Avatar />
      <h1>{userId}</h1>
    </div>
  );
};

export default AvatarModel;
