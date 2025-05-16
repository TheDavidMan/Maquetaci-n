import Login from '../pages/Login.jsx';
import Registro from '../components/Registro.jsx';
import Home from '../Home.jsx';
import Servicios from '../components/Servicios.jsx';
import Contacto from '../components/Contacto.jsx';
import AcercaDe from '../components/AcercaDe.jsx';
import RutaPrivada from '../components/RutaProtegida.jsx';

export const enrutador = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/registro',
        element: <Registro />,
    },
    {
        path: '/',
        element: <RutaPrivada proteger={<Home />} />,
    },
    {
        path: '/servicios',
        element: <RutaPrivada proteger={<Servicios />} />,
    },
    {
        path: '/contacto',
        element: <RutaPrivada proteger={<Contacto />} />,
    },
    {
        path: '/acerca',
        element: <RutaPrivada proteger={<AcercaDe />} />,
    },
];
