import '../Home.css'
import Contenido from './Contenido'
import MenuLateral from './MenuLateral'
import FondoImg from './../assets/Fondo1.jpg';

const Contacto = () => {
  return (
    <div className="aplicacion">
      <img src={FondoImg} alt="logo-img" />
    <MenuLateral />
    <div className="aplicacion__contenido">
      <div className="aplicacion__contenido-fondo"></div>
      <main className="aplicacion__principal">
        <section className="aplicacion__eslogan">
          <h2 className="aplicacion__eslogan-texto">Contacto</h2>
        </section>
        <Contenido />
      </main>
    </div>
  </div>
  )
}

export default Contacto