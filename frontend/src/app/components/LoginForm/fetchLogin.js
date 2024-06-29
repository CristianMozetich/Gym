import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

export const FetchLogin = () => {
  const router = useRouter();
  const { decodeToken, setUserId } = useContext(Contexto);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:1000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const datos = await response.json();
        const decodeData = decodeToken(datos.token);
        setUserId(decodeData.user._id);
        console.log(decodeData.user._id); // INFORMACIÓN DEL USUARIO DECODIFICADA
        router.push("/pages/informacion");
        return datos;
      }
    } catch (error) {
      console.log("no pudiste iniciar sesión", error);
    }
  };

  return { handleSubmit };
};
