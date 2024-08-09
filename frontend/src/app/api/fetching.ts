import { useState, useEffect, useContext } from "react";
import { Contexto } from "../context/Contexto";

interface EjerciciosType {
  _id: string;
  name: string;
  description: string;
  duration: number;
  sets: number;
  reps: number;
  rest: number;
  userId: string;
}

interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  warmup: EjerciciosType[];
  coolDown: EjerciciosType[];
  main: EjerciciosType[];
  objetive: ObjetivoType[];
  personalInfo: PersonalInfoType[];
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
  const [warmup, setWarmup] = useState<EjerciciosType[]>([]);
  const [main, setMain] = useState<EjerciciosType[]>([]);
  const [cooldown, setCoolDown] = useState<EjerciciosType[]>([]);
  const [objetivos, setObjetivos] = useState<ObjetivoType[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType[]>([]);
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

    const response = await fetch("http://localhost:1000/createWarmup", {
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

    const response = await fetch("http://localhost:1000/createMain", {
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

    const response = await fetch("http://localhost:1000/createCooldown", {
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

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:1000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const datos: any = await response.json();
        setUsers(datos);
      }
    } catch {
      console.log("No se pudieron obtener los usuarios");
    }
  };

  useEffect(() => {
    if (userId) {
      getWarmup();
      getMain();
      getCooldown();
      getObjetivos();
      getPersonalInfo();
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
    users,
    getUsers,
  };
};
