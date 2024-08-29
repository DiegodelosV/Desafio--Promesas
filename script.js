const obtenerDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    //mostrar los primeros 20
    datos.forEach((element) => {
      if (element.id <= 20) {
        console.log(element);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

obtenerDatos();

const mensaje = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
};

const enviar = async () => {
  const mostrarMensaje = await mensaje();
  console.log(mostrarMensaje);
};
enviar();
