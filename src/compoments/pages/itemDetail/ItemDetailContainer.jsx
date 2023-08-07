import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../Firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import styles from "./ItemDetail.module.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

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
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Añadido al carrito",
      showConfirmButton: false,
      timer: 2300,
      padding: "2rem",
      customClass: {
        container: styles.container,
        popup: styles.popup,
        title: styles.title,
        icon: styles.icon,
      },
    });
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
