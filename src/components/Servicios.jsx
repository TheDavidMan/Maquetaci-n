import '../Home.css'
import Contenido from './Contenido'
import MenuLateral from './MenuLateral'
import FondoImg from '../assets/Fondo1.jpg';

const Servicios = () => {
  return (
    <div className="aplicacion">
      <img className='fondo' src={FondoImg} alt="fondo" />
    <MenuLateral />
    <div className="aplicacion__contenido">
      <div className="aplicacion__contenido-fondo"></div>
      <main className="aplicacion__principal">
        <section className="aplicacion__eslogan">
          <h2 className="aplicacion__eslogan-texto">Servicios</h2>
        </section>
        <Contenido />
      </main>
    </div>
  </div>
  )
}

export default Servicios