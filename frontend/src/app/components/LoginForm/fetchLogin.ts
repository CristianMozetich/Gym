import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { Contexto } from "../../context/Contexto";

export const FetchLogin = () => {
  const router = useRouter();
  const { decodeToken, setUserId, setUserName } = useContext(Contexto);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("http://https://one80-server.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const datos = await response.json();
        localStorage.setItem("token", datos.token);
        const decodeData = decodeToken(datos.token);
        setUserId(decodeData.user._id);
        setUserName(decodeData.user.name);
        router.push("/pages/paneladmin");
        return datos;
      }
    } catch (error) {
      console.log("no pudiste iniciar sesión", error);
    }
  };

  return { handleSubmit };
};
