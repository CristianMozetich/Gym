export const Fetching = () => {
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
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const response = await fetch('http://localhost:1000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        if(response.status === 200){
            const datos = await response.json()
            console.log(datos)
            return datos
        }
    } catch (error) {
        console.log("no pudiste iniciar sesión", error)
    }
  };

  //Ejercicios
  const postEjercicios = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const response = await fetch ('http://localhost:1000/createExercise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    } )
    try {
      if( response.status === 200 ){
        const datos = await response.json()
        console.log(datos)
        return datos
      }
    } catch {
      console.log("no se pudo crear el ejercicio")
    }
  }

  return { postDataRegister, postDataLogin, postEjercicios };
};
