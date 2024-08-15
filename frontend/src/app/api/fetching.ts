import { useState, useEffect, useContext } from "react";
import { Contexto } from "../context/Contexto";

interface EjerciciosType {
  _id: string;
  ejercicioUno: string;
  ejercicioDos: string;
  ejercicioTres: string;
  duration: number;
  sets: number;
  reps: number;
  rest: number;
  userId: string;
}

interface ClaseType {
  _id: string;
  objetive: ObjetivoType[];
  warmup: EjerciciosType[];
  main: EjerciciosType[];
  cooldown: EjerciciosType[];
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  clase: ClaseType;
}
interface ObjetivoType {
  _id: string;
  name: string;
  description: string;
}

export const Fetching = () => {
  const [warmup, setWarmup] = useState<EjerciciosType[]>([]);
  const [main, setMain] = useState<EjerciciosType[]>([]);
  const [cooldown, setCoolDown] = useState<EjerciciosType[]>([]);
  const [objetivos, setObjetivos] = useState<ObjetivoType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
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
  const postWarmup = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(`http://localhost:1000/${userId}/createWarmup`, {
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

  const postMain = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(`http://localhost:1000/${userId}/createMain`, {
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

  const postCooldown = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(`http://localhost:1000/${userId}/createCooldown`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    try{
      if(response.status === 200){
        const datos = await response.json();
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("no se pudo crear el ejercicio");
    }
  }

  //Get Ejercicios
  const getWarmup = async () => {
    const response = await fetch(
      `http://localhost:1000/${userId}/getWarmup`,
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
        setWarmup(datos);
        return datos;
      }
    } catch {
      console.log("no se pudieron obtener los ejercicios");
    }
  };

  const getMain = async () => {
    const response = await fetch(`http://localhost:1000/${userId}/getMain`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      if (response.status === 200) {
        const datos = await response.json();
        setMain(datos);
        return datos;
      }
    } catch {
      console.log("no se pudieron obtener los ejercicios");
    }
  }

  const getCooldown = async () => {
    const response = await fetch(
      `http://localhost:1000/${userId}/getCooldown`,
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
        setCoolDown(datos);
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
  
    try {
      const response = await fetch(`http://localhost:1000/${userId}/createObjetive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const datos = await response.json();
  
      setObjetivos((prevObjetivos) => [...prevObjetivos, datos]);
  
      return datos;
    } catch (error) {
      console.error("No se pudo crear el objetivo:", error);
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
        setObjetivos(
          objetivos.filter((obj: ObjetivoType) => obj._id !== objetiveId)
        );
        return datos;
      }
    } catch {
      console.log("No se pudo borrar el objetivo");
    }
  };

  useEffect(() => {
    if (userId) {
      getWarmup();
      getMain();
      getCooldown();
    }
  }, [userId]);

  return {
    postDataRegister,
    postWarmup,
    postMain,
    postCooldown,
    warmup,
    main,
    cooldown,
    postObjetivos,
    objetivos,
    deleteObjetive,
    getObjetivos,
    users,
  };
};
