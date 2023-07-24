import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.contenedorFooter}>
      <div className={styles.contenedorInfoFooter}>
        <div className={styles.logosYtexto}>
          <div className={styles.logosFooter}>
          <Link to="/"><img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689613464/ProyectoReactCoder/Footer/logoFooter_wkuzd5.png" /></Link>
            <a href="https://www.google.com/" target="_blank"><img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/GoogleFooter-01_ukqxgk.png" /></a>
            <a href="https://es-es.facebook.com/" target="_blank"><img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/faceBookFooter-01_f7u4su.png" /></a>
            <a href="https://www.instagram.com/" target="_blank"><img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/InstagramFooter-01_uwljkx.png" /></a>
            <a href="https://web.whatsapp.com/" target="_blank"><img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689531741/ProyectoReactCoder/Footer/WhatsappFooter-01_r9wvqb.png" /></a>
          </div>
          <p className={styles.textoFooter}>
            winery.com © 2023 - Todos los derechos reservados{" "}
          </p>
        </div>
        <div className={styles.payPalyCondiciones}>
          <div className={styles.payPal}>
            <p className={styles.textoFooter}>Pago Seguro</p>
            <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689614966/ProyectoReactCoder/Footer/logoPayPal-01_jntwuy.png" />
            <p className={styles.login}>
              <Link>
                <b>LOGIN</b>
              </Link>
            </p>
            <Link>
              <img
                className={styles.loginIcon}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689615816/ProyectoReactCoder/Login_oqepkv.svg"
              />
            </Link>
          </div>

          <p className={styles.textoFooter}>
            Condiciones generales | Política de privacidad | Política de cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
