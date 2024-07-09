import { useState, useEffect } from "react";
import { useContext } from "react";
import { Contexto } from "../context/Contexto";

interface EjerciciosType {
  _id: string;
  name: string;
  description: string;
  duration: number;
  sets: number;
}

interface PersonalInfoType {
  _id: string;
  peso: number;
  altura: number;
  edad: number;
  sexo: string;
}

interface ObjetivoType {
  _id: string;
  name: string;
  description: string;
}

export const Fetching = () => {
  const [ejercicios, setEjercicios] = useState<EjerciciosType[]>([]);
  const [objetivos, setObjetivos] = useState<ObjetivoType[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType[]>([]);
  const { userId } = useContext(Contexto); // ID de usuario DESDE CONTEXTO

  //Registro
  const postDataRegister = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:1000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // colocar aqui los datos que se envian en el cuerpo de la solicitud del formulario
    });
    try {
      if (response.status === 200) {
        const datos = await response.json();
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("error al registrarse");
    }
  };

  //Post Ejercicios
  const postEjercicios = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:1000/createExercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      if (response.status === 200) {
        const datos = await response.json();
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("no se pudo crear el ejercicio");
    }
  };

  //Get Ejercicios
  const getEjercicios = async () => {
    const response = await fetch(
      `http://localhost:1000/${userId}/getExercises`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (response.status === 200) {
        const datos = await response.json();
        setEjercicios(datos);
        return datos;
      }
    } catch {
      console.log("no se pudieron obtener los ejercicios");
    }
  };

  // POST OBJETIVOS
  const postObjetivos = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const payload = {
      ...data,
      userId: userId,
    };

    const response = await fetch("http://localhost:1000/createObjetive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    try {
      if (response.status === 200) {
        const datos = await response.json();
        console.log(datos);

        setObjetivos((...prevObjetivos) => [...prevObjetivos, datos]);

        await getObjetivos();
        return datos;
      }
    } catch {
      console.log("no se pudo crear el objetivo");
    }
  };

  //GET OBJETIVOS
  const getObjetivos = async () => {
    const response = await fetch(
      `http://localhost:1000/${userId}/getObjetive`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (response.status === 200) {
        const datos = await response.json();
        setObjetivos(datos);
        return datos;
      }
    } catch {
      console.log("no se pudieron obtener los objetivos");
    }
  };

  // POST PERSONAL INFO
  const postPersonalInfo = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const payload = {
      ...data,
      userId: userId,
    };

    const response = await fetch("http://localhost:1000/personalInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    try {
      if (response.status === 200) {
        const datos = await response.json();
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("No se pudo cargar la información personal");
    }
  };

  //GET PERSONAL INFO
  const getPersonalInfo = async () => {
    const response = await fetch(
      `http://localhost:1000/${userId}/personalInfo`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      if (response.status === 200) {
        const datos = await response.json();
        setPersonalInfo(datos);
        return datos;
      }
    } catch {
      console.log("No se pudo obtener la información personal");
    }
  };

  useEffect(() => {
    if (userId) {
      getEjercicios();
      getObjetivos();
      getPersonalInfo();
    }
  }, [userId]);


  const deleteObjetive = async (objetiveId: string) => {
    const response = await fetch(
      `http://localhost:1000/deleteObjetive/${userId}/${objetiveId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      if (response.status === 200) {
        const datos = await response.json();
        console.log(datos);
        setObjetivos(objetivos.filter((obj: ObjetivoType) => obj._id !== objetiveId))
        return datos;
      }
    } catch {
      console.log("No se pudo borrar el objetivo");
    }
  };

  return {
    postDataRegister,
    postEjercicios,
    ejercicios,
    postObjetivos,
    objetivos,
    postPersonalInfo,
    personalInfo,
    deleteObjetive,
  };
};
