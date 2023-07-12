import {BrowserRouter, Routes, Route} from "react-router-dom" ///Indican que a partir de la importación nuestro proyecto va a tener un sistema de rutas. Tienen etiqueta de cierre.
import NavbarContainer from "./compoments/layouts/navbar/NavbarContainer";


import Cards from "./compoments/common/cards/cards";
import ItemListPremiadosContainer from "./compoments/pages/itemListPremiados/itemListPremiadosContainer";

function App() {

  
  return (  ///Esta es la estructura que siempre va a quedar así. Es el sistema de rutas que vamos a usar siempre.
  <ItemListPremiadosContainer/>
 
);
};

export default App;
