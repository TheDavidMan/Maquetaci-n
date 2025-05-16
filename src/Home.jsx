import './Home.css'
import Contenido from './components/Contenido'
import MenuLateral from './components/MenuLateral'
import FondoImg from './assets/Fondo1.jpg';

const Home = () => {
  return (
    <div className="aplicacion"> <div></div>
            <img className='fondo' src={FondoImg} alt="fondo" />
    <MenuLateral />
    <div className="aplicacion__contenido">
      <div className="aplicacion__contenido-fondo"></div>
      <main className="aplicacion__principal">
        <section className="aplicacion__eslogan">
          <h2 className="aplicacion__eslogan-texto">Home</h2>
        </section>
        <Contenido />
      </main>
    </div>
  </div>
  )
}

export default Home