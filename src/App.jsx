import {BrowserRouter, Routes, Route} from "react-router-dom" ///Indican que a partir de la importación nuestro proyecto va a tener un sistema de rutas. Tienen etiqueta de cierre.
import NavbarContainer from "./compoments/layouts/navbar/NavbarContainer";
import PremiadosContainer from "./compoments/pages/premiados/PremiadosContainer";
import HomeContainer from "./compoments/pages/home/HomeContainer";

function App() {

  
  return (  ///Esta es la estructura que siempre va a quedar así. Es el sistema de rutas que vamos a usar siempre.
  <BrowserRouter>
    <Routes>

      <Route path="" element={<NavbarContainer />}> {/* Al ser una ruta padre se reciben los hijos como children pero en realidad con React Routes son Outlet*/}
        <Route path="/" element={<HomeContainer />} />
        <Route path="/cart" /* Asi le decimos que estamos iniciando la ruta raíz */ element={ <h1>AOOOOLO</h1> } /* En element pueden ir etiquetas o bien ya los componentes armados *//>
        <Route path="/premiados" /* Asi le decimos que estamos iniciando la ruta raíz */ element={ <PremiadosContainer />} /* En element pueden ir etiquetas o bien ya los componentes armados *//>
       
      </Route> 

      <Route path="*" element = {<h1>NOT FOUND</h1>}/>
    </Routes>
</BrowserRouter>

);
};

export default App;
