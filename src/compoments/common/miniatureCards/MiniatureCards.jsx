import { Link } from "@mui/material";
import styles from "./MiniatureCards.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Contador from "../contador/Contador";

const MiniatureCards = () => {
  return (
    <div className={styles.contenedorMiniCard}>
      <div className={styles.miniCard}>
        <div className={styles.imgInfo}>
          <div className={styles.imgMini}>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689605354/ProyectoReactCoder/VinosBlancos/04_o2be5q.jpg"
              alt=""
            />
          </div>
          <div className={styles.contenedorInfo}>
            <p>Botella de 720ml</p>
            <div className={styles.nombrePrecio}>
              <p className={styles.nombre}>
                <b>Ron Barceló Signio</b>
              </p>
              <p className={styles.precio}>
                <b>12</b>€
              </p>
            </div>

            <div className={styles.contenedorBtnes}>
              <Link className={styles.btnMasInfo}>
                <b>+info</b>
              </Link>
              <button className={styles.btnDeleteProduct}>
                <CancelIcon sx={{ fontSize: "large" }} />
                <p>Eliminar</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.contenedorContadorPrecioAcc}>
          <Contador />
          <p className={styles.PrecioAcc}>
            <b>36</b>€
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniatureCards;
