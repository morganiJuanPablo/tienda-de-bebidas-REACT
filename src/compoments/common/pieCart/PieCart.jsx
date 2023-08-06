import { useContext } from "react";
import styles from "./PieCart.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const PieCart = () => {
  const { clearCart, totalPrice } = useContext(CartContext);
  let total = totalPrice();
  return (
    <div className={styles.contenedorPieCart}>
      <button className={styles.btnEmptyCart} onClick={clearCart}>
        <DeleteForeverIcon sx={{ fontSize: "2.3rem" }} />
        <p>Vaciar el carrito</p>
      </button>
      <div className={styles.contTotalComprar}></div>
      <p className={styles.total}>
        Total: <b>{total}</b>€
        <Link to={"/checkoutCompra"}><button>COMPRAR</button></Link>
      </p>
    </div>
  );
};

export default PieCart;
