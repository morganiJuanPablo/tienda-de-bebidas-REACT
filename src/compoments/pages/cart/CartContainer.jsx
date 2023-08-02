import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

const CartContainer = () => {
  const { addToCart, getQuantityById, cart } = useContext(CartContext);
  return <Cart />;
};

export default CartContainer;
