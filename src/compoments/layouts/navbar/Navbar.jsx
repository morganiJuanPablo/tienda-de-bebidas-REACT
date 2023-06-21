import React from "react";
import styles from "./Navbar.module.css";
import CartWidget from "../../common/cart-widget/CartWidget";
import { Box, Grid } from "@mui/material";

const Navbar = ({ contador }) => {
  return (
    <Grid container className={styles.contenedorNavBar}>
      <div className={styles.contenedorLogoNavBar} item xs={9} lg={6}>
        <img
          className={styles.logoNavBar}
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687260436/wineryLogo_kvwktq.svg"
        />
      </div>
      <Box item sx={{ display: { xs: "none", lg: "block" } }} lg={6}>
        <ul className={styles.navBarEstilos}>
          <li>PREMIADOS</li>
          <li>BODEGA</li>
          <li>NOSOTROS</li>
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
  );
};

export default Navbar;
