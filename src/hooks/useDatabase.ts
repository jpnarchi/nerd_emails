/* LLAMADAS A LA API*/
// const URL1 = "https://mianoktos.vercel.app";
// const URL = "http://localhost:3000";
// const URL2 = "http://localhost:3001";
// const ROUTES = {
//   stripe: "/v1/stripe",
//   solicitud: "/v1/solicitud",
//   agentes: "/v1/agentes"
// };
// const ENDPOINTS = {
//   createAgente: "/create",
// };
const API_KEY =
  "nkt-U9TdZU63UENrblg1WI9I1Ln9NcGrOyaCANcpoS2PJT3BlbkFJ1KW2NIGUYF87cuvgUF3Q976fv4fPrnWQroZf0RzXTZTA942H3AMTKFKJHV6cTi8c6dd6tybUD65fybhPJT3BlbkFJ1KW2NIGPrnWQroZf0RzXTZTA942H3AMTKFy15whckAGSSRSTDvsvfHsrtbXhdrT";
const AUTH = {
  "x-api-key": API_KEY,
};

export const createAgente = async (data, id: string) => {
  console.log(data.nombre);
  try {
    const response = await fetch(`http://localhost:3001/v1/mia/agentes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...AUTH,
      },
      body: JSON.stringify({
        name: data.name,
        secondName: data.secondName,
        lastname1: data.lastname1,
        lastname2: data.lastname2,
        email: data.email,
        phone: data.phone,
        password: data.password,
        id: id
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.message === "Agente creado correctamente") {
      return ({
        success: true
      })
    }
    else {
      return ({
        success: false
      })
    }
  } catch (error) {
    console.log(error);
    return ({
      success: false
    })
  }
}

