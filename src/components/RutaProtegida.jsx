import React from 'react';
import { Navigate } from "react-router-dom";

const RutaPrivada = ({ proteger }) => {
  const token = localStorage.getItem("token");
  return token ? proteger : <Navigate to="/login" />;
};

export default RutaPrivada;
