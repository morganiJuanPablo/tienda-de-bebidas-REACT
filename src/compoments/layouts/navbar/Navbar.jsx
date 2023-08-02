import styles from "./Navbar.module.css";
import CartWidget from "../../common/cart-widget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.padre}>
        <div className={styles.contenedorPadre}>
          <div className={styles.contenedorNavBar}>
            <div className={styles.contenedorLogoNavBar}>
              <Link to="/">
                <img
                  className={styles.logoNavBar}
                  src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687260436/wineryLogo_kvwktq.svg"
                />
              </Link>
            </div>
            <div>
              <div>
                <ul className={styles.navBarEstilos}>
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
              <div className={styles.contenedorLoginInput}>
                <Link className={styles.btnLogin}>
                  <p>
                    <b>LOGIN</b>
                  </p>
                  <img
                    src="https://res.cloudinary.com/dqykftyy6/image/upload/q_100/v1689000182/loginIcon_ql2rnk.ico"
                    alt="Login"
                  />
                </Link>
                <input
                  className={styles.inputNavBar}
                  type="text"
                  placeholder="Búsqueda"
                ></input>
              </div>
            </div>
          </div>

          <div className={styles.contenedorIconosNavBar}>
            <div>
              <img
                className={styles.icono}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-02_migynq.png"
                alt="Presentación"
              />
            </div>

            <p className={styles.detallesIcono}>
              ¿Qué formato de botella tiene?
            </p>

            <div>
              <img
                className={styles.icono}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-03_yrdaal.png"
                alt="Varietal"
              />
            </div>

            <p className={styles.detallesIcono}>¿Qué varietal es?</p>

            <div>
              <img
                className={styles.icono}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-04_wl8wmj.png"
                alt="Origen"
              />
            </div>

            <p className={styles.detallesIcono}>
              ¿Cuál es su origen geográfico?
            </p>

            <div>
              <img
                className={styles.icono}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250886/ProyectoReactCoder/IconsIremDetail/Icons-01_uuphhk.png"
                alt="Graduación"
              />
            </div>
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