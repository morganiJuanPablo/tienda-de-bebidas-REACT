
import styles from "./Navbar.module.css";
import CartWidget from "../../common/cart-widget/CartWidget";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom"
const Navbar = ({ contador }) => {
  return (
    <div>
      <Grid container className={styles.contenedorNavBar}>
        <div className={styles.contenedorLogoNavBar} item xs={9} lg={6}>
        <Link to="/">
          <img
            className={styles.logoNavBar}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687260436/wineryLogo_kvwktq.svg"
          /></Link>
        </div>
        <Box item sx={{ display: { xs: "none", lg: "block" } }} lg={6}>
          <ul className={styles.navBarEstilos}>
            <Link to="/premiados">PREMIADOS</Link>
            <Link to="/tintos">VINOS TINTOS</Link>
            <Link to="/blancos">VINOS BLANCOS</Link>
            <Link to="/destilados">DESTILADOS</Link>
            
            <CartWidget contador={contador} />
          </ul>
        </Box>
        <Box
          item
          sx={{
            display: { xs: "block", lg: "none" },
            width: "3rem",
            paddingTop: "2rem",
            marginRight: "5rem",
          }}
          xs={3}
        >
          <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687330474/iconoHamburguesa_vimo0s.svg" />
        </Box>
      </Grid>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
