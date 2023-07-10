import { useState } from "react";

const useCounter = (initial = 0, max) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    counter < max && setUser(counter + 1);
  };
  const restar = () => {
    counter > 1 && setUser(counter - 1);
  };
  const reset = () => {
    setCounter(initial);
  }

  return {counter, sumar, restar, reset}

};



export default useCounter;