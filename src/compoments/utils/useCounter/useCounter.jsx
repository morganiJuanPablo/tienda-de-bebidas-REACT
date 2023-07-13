import { useState } from "react";

const useCounter = (initial) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return { contador, sumar, restar };
};

export default useCounter;
