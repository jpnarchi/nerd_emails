import { URL, HEADERS_API } from "../constants/apiConstant";

export const useSolicitud = () => {
  const crearSolicitud = async (solicitud: any) =>
    await postSolicitud(solicitud);
  return {
    crearSolicitud,
  };
};

async function postSolicitud(solicitud) {
  if (solicitud.user_id) {
    solicitud.id_viajero = solicitud.user_id.slice(0, 4);
  }
  if (solicitud.confirmationCode) {
    solicitud.confirmation_code = solicitud.confirmationCode;
    solicitud.id_viajero = Math.round(Math.random() * 999999999);
    solicitud.hotel_name = solicitud.hotel.name;
    solicitud.check_in = solicitud.dates.checkIn;
    solicitud.check_out = solicitud.dates.checkOut;
    solicitud.room_type = solicitud.room.type;
    solicitud.total_price = solicitud.room.totalPrice;
    solicitud.status = "pending";
  }
  if (solicitud.checkIn) {
    solicitud.confirmation_code = Math.round(Math.random() * 999999999);
    solicitud.id_viajero = Math.round(Math.random() * 999999999);
    solicitud.hotel_name = "No hay nombre";
    solicitud.check_in = solicitud.checkIn;
    solicitud.check_out = solicitud.checkOut;
    solicitud.room_type = solicitud.roomType;
    solicitud.total_price = solicitud.totalPrice;
    solicitud.status = "pending";
  }
  try {
    const res = await fetch(`${URL}/v1/mia/solicitud`, {
      method: "POST",
      headers: HEADERS_API,
      body: JSON.stringify(solicitud),
    });
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

type PostBodyParams = {
  confirmation_code: "probandrdao 1";
  id_viajero: 135;
  hotel_name: "ciudad express";
  check_in: "2025-11-23";
  check_out: "2025-11-28";
  room_type: "sencilla";
  total_price: 124.4;
  status: "pending";
};
