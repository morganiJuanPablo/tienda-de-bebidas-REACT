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
      <div className={styles.containerTotalComprar}>
        <p className={styles.total}>
          Total: <b>{total}</b>€</p>
          <Link to={"/checkoutCompra"}>
            <button className={styles.btnComprar}>COMPRAR</button>
          </Link>
        
      </div>
    </div>
  );
};

export default PieCart;
