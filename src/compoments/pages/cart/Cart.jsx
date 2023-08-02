import MiniatureCards from "../../common/miniatureCards/MiniatureCards";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className={styles.contenedorMensaje}>
        <p>:/</p>
        <p>El carrito está vacío</p>
        <Link to="/">
          <button>Ir al inicio</button>
        </Link>
      </div>
    </>
    //Siempre React solicita una key a la hora de mapear elementos. Se trata de una propiedad-valor que resulte único para cada producto.
    /*  <MiniatureCards/> */
  );
};

export default Cart;
