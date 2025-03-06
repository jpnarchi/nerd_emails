import React from "react";
import { useSolicitud } from "../hooks/useSolicitud";

interface CallToBackendProps {
  children: React.ReactNode;
  paymentData: any;
  className?: string;
  bookingData?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CallToBackend: React.FC<CallToBackendProps> = ({
  children,
  bookingData,
  paymentData,
  className,
  onClick,
}) => {
  const { crearSolicitud } = useSolicitud();
  // const urlParams = new URLSearchParams(window.location.search);
  // const session = urlParams.get("session");

  // if (!session) {
  //   obtenerSessionCheckout(
  //     "cs_live_a10ETlnCEAsKIlJNvhJTRtlQJoAwy8V6zWSAYER15SOesH0dE67tTYGHg6"
  //   );
  // }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    crearSolicitud(bookingData);
    // if (onClick) onClick(e);
    // crearSessionCheckout(paymentData);
    console.log(bookingData);
  };

  return (
    <button onClick={handleSubmit} className={className} type="button">
      {children}
    </button>
  );
};

/* LLAMADAS A LA API*/
const URL = "httpss://mianoktos.vercel.app";
const ROUTES = {
  stripe: "/v1/stripe",
};
const ENDPOINTS = {
  create: "/create-checkout-session",
  retrieve: "/get-checkout-session",
};
const API_KEY =
  "nkt-U9TdZU63UENrblg1WI9I1Ln9NcGrOyaCANcpoS2PJT3BlbkFJ1KW2NIGUYF87cuvgUF3Q976fv4fPrnWQroZf0RzXTZTA942H3AMTKFKJHV6cTi8c6dd6tybUD65fybhPJT3BlbkFJ1KW2NIGPrnWQroZf0RzXTZTA942H3AMTKFy15whckAGSSRSTDvsvfHsrtbXhdrT";
const AUTH = {
  "x-api-key": API_KEY,
};

const obtenerSessionCheckout = async (ID_CHECKOUT_SESSION: string) => {
  const response = await fetch(
    `${URL}${ROUTES.stripe}${ENDPOINTS.retrieve}?id_checkout=${ID_CHECKOUT_SESSION}`,
    {
      method: "GET",
      headers: AUTH,
    }
  );
  const json = await response.json();
  console.log(json);
};

const crearSessionCheckout = async (payment_data: any) => {
  const response = await fetch(`${URL}${ROUTES.stripe}${ENDPOINTS.create}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...AUTH,
    },
    body: JSON.stringify({ payment_data }),
  });
  const json = await response.json();

  window.location.replace(json.url);
};
