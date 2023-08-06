import MiniatureCards from "../../common/miniatureCards/MiniatureCards";
import PieCart from "../../common/pieCart/PieCart";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteById }) => {
  return (
    <>
      {cart.length === 0 ? (
        <div className={styles.contenedorMensaje}>
          <p className={styles.faceEmptyCart}>:/</p>
          <p className={styles.messageEmptyCart}>El carrito está vacío</p>
          <Link to="/">
            <button>Ir al inicio</button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((elemento) => {
            return (
              <MiniatureCards
                key={elemento.id}
                elemento={elemento}
                deleteById={deleteById}
              />
            );
          })}
          <PieCart />
        </>
      )}
    </>
  );
};

export default Cart;
