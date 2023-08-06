import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, deleteById } = useContext(CartContext);
  return <Cart cart={cart} deleteById={deleteById} />;
};

export default CartContainer;
