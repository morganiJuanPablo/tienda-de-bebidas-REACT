import styles from "./Navbar.module.css";
import CartWidget from "../../common/cart-widget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.contenedorGeneral}>
        <div className={styles.contenedor}>
          <Link to="/">
            <img
              className={styles.logoNavBar}
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687260436/wineryLogo_kvwktq.svg"
            />
          </Link>

          <div className={styles.contenedorNavBar}>
            <ul className={styles.ul}>
              <Link to="/category/premiados">
                <b>PREMIADOS</b>
              </Link>
              <Link to="/category/VinosTintos">
                <b>VINOS TINTOS</b>
              </Link>
              <Link to="/category/VinosBlancos">
                <b>VINOS BLANCOS</b>
              </Link>
              <Link to="/category/Destilados">
                <b>DESTILADOS</b>
              </Link>
              <CartWidget />
            </ul>
          </div>
        </div>

        <div className={styles.contenedorIconosNavBar}>
          <div className={styles.iconInfo}>
            <img
              className={styles.icono}
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-02_migynq.png"
              alt="Presentación"
            />
            <p className={styles.detallesIcono}>
              ¿Qué formato de botella tiene?
            </p>
          </div>
          <div className={styles.iconInfo}>
            <img
              className={styles.icono}
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-03_yrdaal.png"
              alt="Varietal"
            />
            <p className={styles.detallesIcono}>¿Qué varietal es?</p>
          </div>
          <div className={styles.iconInfo}>
            <img
              className={styles.icono}
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-04_wl8wmj.png"
              alt="Origen"
            />
            <p className={styles.detallesIcono}>
              ¿Cuál es su origen geográfico?
            </p>
          </div>
          <div className={styles.iconInfo}>
            <img
              className={styles.icono}
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250886/ProyectoReactCoder/IconsIremDetail/Icons-01_uuphhk.png"
              alt="Graduación"
            />
            <p className={styles.detallesIcono}>
              ¿Cuál es su graduación alcohólica?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
