import NavbarContainer from "./compoments/layouts/navbar/NavbarContainer";
import HomeContainer from "./compoments/pages/home/HomeContainer";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  return (
    <div style={{ backgroundColor: "#180b1d", width: "100%", height: "100vh" }}>
      <NavbarContainer contador={contador} />
      <HomeContainer sumar={sumar} />
    </div>
  );
}

export default App
