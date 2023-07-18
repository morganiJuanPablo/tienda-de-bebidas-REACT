import { Link } from "@mui/material";
import styles from "./MiniatureCards.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

const MiniatureCards = () => {
  return (
    <div className={styles.contenedorMiniCard}>
      <div className={styles.miniCard}>
        <div className={styles.imgInfo}>
          <div className={styles.imgMini}>
            <img src="" alt="" />
          </div>
          <div className={styles.contenedorInfo}>
            <p>Botella de 720ml</p>
            <div className={styles.nombrePrecio}>
              <p className={styles.nombre}><b>Ron Barceló Signio</b></p>
              <p className={styles.precio}><b>12</b>€</p>
            </div>

            <div className={styles.contenedorBtnes}>
              <Link className={styles.btnMasInfo}>
                <b>+info</b>
              </Link>
              <button className={styles.btnDeleteProduct}>
                <CancelIcon sx={{ fontSize: "inherit" }} />
                <p>Eliminar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniatureCards;
