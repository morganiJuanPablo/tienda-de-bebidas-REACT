import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let cantidadTotal = getTotalQuantity(); /// Es buena práctica guardar en una variable la ejecución o el llamado a la función.

  return (
    <>
      <Link to="/cart">
        <Badge
          badgeContent={cantidadTotal}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "1.4rem",
              fontWeight: "bold",
              backgroundColor: "#f8b56d",
              color: "#180b1d",
              marginLeft: "10rem",
            },
          }}
          showZero
        >
          <ShoppingCartOutlinedIcon
            color="white"
            fontSize="large"
            sx={{ scale: "120%", marginLeft: "10px" }}
          />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
