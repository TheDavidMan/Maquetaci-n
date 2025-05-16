import '../Home.css'
import Contenido from './Contenido'
import MenuLateral from './MenuLateral'
import FondoImg from '../assets/Fondo1.jpg';

const AcercaDe = () => {
  return (
    <div className="aplicacion">
      <img className='fondo' src={FondoImg} alt="Fondo" />
    <MenuLateral />
    <div className="aplicacion__contenido">
      <div className="aplicacion__contenido-fondo"></div>
      <main className="aplicacion__principal">
        <section className="aplicacion__eslogan">
          <h2  className="aplicacion__eslogan-texto" >Acerca De</h2>
        </section>
        <Contenido />
      </main>
    </div>
  </div>
  )
}

export default AcercaDe