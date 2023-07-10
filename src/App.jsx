import NavbarContainer from "./compoments/layouts/navbar/NavbarContainer";
import HomeContainer from "./compoments/pages/home/HomeContainer";
import { useState } from "react";
import ItemListContainer from "./compoments/pages/itemList/ItemListContainer";

function App() {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <NavbarContainer contador={contador} />
      <HomeContainer sumar={sumar} />
      <ItemListContainer />
    </div>
  );
}

export default App;
