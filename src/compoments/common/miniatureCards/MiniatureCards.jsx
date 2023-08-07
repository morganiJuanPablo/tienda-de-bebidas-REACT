import { Link } from "react-router-dom";
import styles from "./MiniatureCards.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MiniatureCards = ({ elemento, deleteById }) => {
  return (
    <div className={styles.contenedorMiniCard}>
      <div className={styles.miniCard}>
        <div className={styles.imgInfo}>
          <div className={styles.imgMini}>
            <img src={elemento.img} alt="Imagen del producto" />
          </div>
          <div className={styles.contenedorInfo}>
            <p>
              Botella de {elemento.formato}.
              <b> Unidades: {elemento.quantity}</b>
            </p>
            <div className={styles.nombrePrecio}>
              <p className={styles.nombre}>
                <b>{elemento.tittle}</b>
              </p>
            </div>

            <div className={styles.contenedorBtnes}>
              <Link to={`/itemDetail/${elemento.id}`}>
                <b>+info</b>
              </Link>
              <button
                className={styles.btnDeleteProduct}
                onClick={() => deleteById(elemento.id)}
              >
                <DeleteForeverIcon sx={{ fontSize: "large" }} />
                <p>Eliminar</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.contenedorContadorPrecioAcc}>
          {/* <Contador /> */}
          <p className={styles.total}>Subtotal</p>
          <p className={styles.PrecioAcc}>
            <b>{elemento.price * elemento.quantity}</b>€
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniatureCards;
