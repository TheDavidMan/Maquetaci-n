import { alerta } from "../services/helpers/Funciones";
import { useNavigate, Link } from "react-router-dom"; 
import HomeImg from '../assets/Home.png'; 
import ServiciosImg from '../assets/Servicios.png'; 
import ContactoImg from '../assets/Contacto.png'; 
import AcercaDeImg from '../assets/AcercaDe.png'; 
import SalirImg from '../assets/Salir.png'; 

const MenuLateral = () => {
  const redireccion = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alerta("Bai", "Cerrando sesión", "info");
    redireccion("/");
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Home</h1>
      <nav className="aplicacion__menu-lateral-navegacion">   
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/">
        <img src={HomeImg} alt="Home" className="logo-img" />
          Home
        </Link >
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/servicios">
        <img src={ServiciosImg} alt="Servicios" className="logo-img" />
          Servicios
        </Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/contacto">
        <img src={ContactoImg} alt="Contacto" className="logo-img" />
          Contacto
        </Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/acerca">
        <img src={AcercaDeImg} alt="AcercaDe" className="logo-img" />
          Acerca de
        </Link>
        <button
          type="button"
          onClick={cerrarSesion}
          className="aplicacion__menu-lateral-navegacion-item"
        >
          <img src={SalirImg} alt="Salir" className="logo-img" />
          Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};

export default MenuLateral;