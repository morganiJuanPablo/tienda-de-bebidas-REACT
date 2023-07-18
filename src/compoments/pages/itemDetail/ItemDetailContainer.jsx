import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/cartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {addToCart} = useContext (CartContext)
  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === Number(id))
      resolve(productSelected);
    });

    promesa.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data)
  }

  return <ItemDetail product={product} agregarCarrito={agregarCarrito} />;
};

export default ItemDetailContainer;
