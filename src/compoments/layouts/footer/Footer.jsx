import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.contenedorFooter}>
      <div className={styles.left}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689613464/ProyectoReactCoder/Footer/logoFooter_wkuzd5.png" />
        </Link>
        <div className={styles.logosFooter}>
          <a href="https://www.google.com/" target="_blank">
            <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/GoogleFooter-01_ukqxgk.png" />
          </a>
          <a href="https://es-es.facebook.com/" target="_blank">
            <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/faceBookFooter-01_f7u4su.png" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/InstagramFooter-01_uwljkx.png" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank">
            <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/WhatsappFooter-01_r9wvqb.png" />
          </a>
        </div>
      </div>
      <div className={styles.rigth}>
        <div className={styles.payPal}>
          <p className={styles.textoFooter}>Pago Seguro</p>
          <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689614966/ProyectoReactCoder/Footer/logoPayPal-01_jntwuy.png" />
        </div>
        <p className={styles.textoFooter}>
          winery.com © 2023 | Todos los derechos reservados
        </p>
        <p className={styles.textoFooter}>
          Condiciones generales | Política de privacidad | Política de cookies
        </p>
      </div>
    </div>
  );
};

export default Footer;
