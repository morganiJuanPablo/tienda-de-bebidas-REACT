import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../Firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);
  let { id } = useParams();
  let actualQuantityCart = getQuantityById(id);

  useEffect(() => {
    let totalRef = collection(dataBase, "products");
    let productRef = doc(totalRef, id);
    getDoc(productRef).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);
  };

  return (
    <ItemDetail
      product={product}
      agregarCarrito={agregarCarrito}
      actualQuantityCart={actualQuantityCart}
      stock={product.stock}
    />
  );
};

export default ItemDetailContainer;
