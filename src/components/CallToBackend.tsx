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
}) => {
  const { crearSolicitud } = useSolicitud();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    crearSolicitud(bookingData);
    console.log(bookingData);
  };

  return (
    <button onClick={handleSubmit} className={className} type="button">
      {children}
    </button>
  );
};
