import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";


const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    //Siempre React solicita una key a la hora de mapear elementos. Se trata de una propiedad-valor que resulte único para cada producto.
    <div key={id}> 
    </div>
  )
}

export default Cart
