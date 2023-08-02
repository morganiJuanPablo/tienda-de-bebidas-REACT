import { useState } from "react";

const useCounter = (initial = 0, max) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador <= max) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  return { contador, sumar, restar };
};

export default useCounter;
