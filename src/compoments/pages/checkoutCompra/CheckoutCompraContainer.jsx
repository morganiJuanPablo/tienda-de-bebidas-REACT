import CheckoutCompra from "./CheckoutCompra";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import { dataBase } from "../../../Firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutCompraContainer = () => {
  const { cart, totalPrice } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  const [orderId, setOrderId] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let total = totalPrice();
  const handleSubmit = (evento) => {
    evento.preventDefault();
    setLoading(true);

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    let ordersCollections = collection(dataBase, "orders");
    addDoc(ordersCollections, order)
      .then((res) => {
        console.log("orderId obtenido:", res.id);
        setOrderId(res.id);
        cart.forEach((elemento) => {
          updateDoc(doc(dataBase, "products", elemento.id), {
            stock: elemento.stock - elemento.quantity,
          });
        });
      })
      .catch((error) => {
        console.error("Error al agregar el documento:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    cart.forEach((elemento) => {
      updateDoc(doc(dataBase, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <>
      <CheckoutCompra
        cart={cart}
        total={total}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        orderId={orderId}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};

export default CheckoutCompraContainer;
