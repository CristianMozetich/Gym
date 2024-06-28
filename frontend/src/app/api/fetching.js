import { useState, useEffect } from "react";
export const Fetching = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [objetivos, setObjetivos] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const userId = "667c643095199ab49cf61825"; // ID de usuario hardcodeado. TRAER DESDE CONTEXTO

  //Registro
  const postDataRegister = async (e) => {
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

  //Login
  const postDataLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:1000/login", {
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
    } catch (error) {
      console.log("no pudiste iniciar sesión", error);
    }
  };

  //Post Ejercicios
  const postEjercicios = async (e) => {
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
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("no se pudieron obtener los ejercicios");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const datos = await getEjercicios();
      setEjercicios(datos);
    };

    fetchData();
  }, [userId]);

  // POST OBJETIVOS
  const postObjetivos = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:1000/createObjetive", {
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
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("no se pudieron obtener los objetivos");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const datos = await getObjetivos();
      setObjetivos(datos);
    };

    fetchData();
  }, [userId]);

  // POST PERSONAL INFO
  const postPersonalInfo = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:1000/personalInfo", {
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
        console.log(datos);
        return datos;
      }
    } catch {
      console.log("No se pudo obtener la información personal")
    }
  };

  useEffect(()=>{
    const fetchData = async () => {
      const datos = await getPersonalInfo();
      setPersonalInfo(datos)
    }

    fetchData()
  },[userId])

  return {
    postDataRegister,
    postDataLogin,
    postEjercicios,
    ejercicios,
    postObjetivos,
    objetivos,
    postPersonalInfo,
    personalInfo
  };
};
