import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { alerta } from "../services/helpers/Funciones";
import '../Home.css' // Asegúrate que todos usen el mismo estilo base;
import InicioImg from './../assets/Inicio.png'; // Asegúrate de que la ruta sea correcta

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navegar = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registro = JSON.parse(localStorage.getItem("usuario"));
    if (registro && registro.usuario === usuario && registro.clave === clave) {
      localStorage.setItem("token", "ok");
      alerta("Bienvenido", `Hola ${usuario}`, "success");
      navegar("/"); // Redirige a Home
    } else {
      alerta("Error", "Credenciales incorrectas", "error");
    }
  };

  return (
<div className="auth-container">
  <form className="auth-form" onSubmit={handleSubmit}><img src={InicioImg} alt="logo-img" />
    <h2>Iniciar Sesión</h2>
    <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
    <input type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} />
    <button type="submit">Iniciar sesión</button>
    <p><Link to="/registro">¿No tiene una cuenta?</Link></p>
  </form>
</div>

  );
};

export default Login;