import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <Badge 
          badgeContent={cart.length}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "1.4rem",
              fontWeight: "bold",
              backgroundColor: "#f8b56d",
              color: "#180b1d",
              marginLeft: "10rem",
            },
          }}
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
