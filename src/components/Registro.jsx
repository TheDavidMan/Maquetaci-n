// src/Registro.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { alerta } from "../services/helpers/Funciones";
import FondoImg from './../assets/Registro.png'; // Asegúrate de que la ruta sea correcta

const Registro = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const navegar = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoUsuario = { usuario, clave, nombre, correo };
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
    alerta("Éxito", "Usuario registrado", "success");
    navegar("/");
  };

  return (
<div className="auth-container"> 
  <form className="auth-form" onSubmit={handleSubmit}><img src={FondoImg} alt="logo-img" />
    <h2>Registrarse</h2>
    <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
    <input type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} />
    <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
    <input type="email" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
    <button type="submit">Registrarse</button>
    <p><Link to="/login">¿Ya tiene una cuenta?</Link></p>
  </form>
</div>
  );
};

export default Registro;
