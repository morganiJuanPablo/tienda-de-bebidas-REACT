import styles from "./Navbar.module.css";
import CartWidget from "../../common/cart-widget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className={styles.padre}>
      <div container className={styles.contenedorNavBar}>
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
              <Link to="/category/premiados">PREMIADOS</Link>
              <Link to="/category/VinosTintos">VINOS TINTOS</Link>
              <Link to="/category/VinosBlancos">VINOS BLANCOS</Link>
              <Link to="/category/Destilados">DESTILADOS</Link>
              <CartWidget />
            </ul>
          </div>
          <div>
            <div>
              <button>Login</button>
              <img
                src="https://res.cloudinary.com/dqykftyy6/image/upload/q_100/v1689000182/loginIcon_ql2rnk.ico"
                alt="Login"
                />
            </div>
            <input type="text" placeholder="Búsqueda"></input>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
