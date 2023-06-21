import { Badge } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = ({contador}) => {

  return (
    <>
    <Badge badgeContent={contador} sx={{
          "& .MuiBadge-badge": {
            fontSize: "1.4rem",
            fontWeight: "bold",
            backgroundColor:"#f8b56d",
            color:"#180b1d"}}}>
      <ShoppingCartOutlinedIcon color="white" fontSize="large" sx={{scale:"120%",paddingLeft:"0"}} />
    </Badge>
    </>
  )
}

export default CartWidget