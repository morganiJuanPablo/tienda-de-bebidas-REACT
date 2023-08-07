import { createContext, useState } from "react";
import styles from "./CartContext.module.css";

export const CartContext = createContext(); ///Acá creamos el contexto. Se exporta al igual que el componente para que luego se reciba en cada useContext que utilicemos en los distintos componentes.

const CartContextComponent = ({ children }) => {
  ///Este es el componente de React, aquí va a estar toda la lógica del carrito.

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return { ...elemento, quantity: 1 };
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: styles.confirmbtn,
        cancelButton: styles.cancelbtn,
        popup: styles.popup,
        icon: styles.icon,
        title: styles.title,
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Deseas vaciar el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        iconColor: "red",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setCart([]);
        }
      });
  };

  const deleteById = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: styles.confirmbtn,
        cancelButton: styles.cancelbtn,
        popup: styles.popup,
        icon: styles.icon,
        title: styles.title,
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Quieres eliminar el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          let newArr = cart.filter((elemento) => elemento.id !== id);
          setCart(newArr);
        }
      });
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);
    return producto?.quantity;
  };

  const Add1fromCards = (cantidad) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return { ...elemento, quantity: 1 };
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    totalPrice,
    getQuantityById,
    Add1fromCards,
  };

  return (
    //No retorna HTML, sino que se retorna el contexto con su método Provider Dentro Le damos acceso así a que todos los hijos puedan acceder ala información. A su vez tiene una propiedad llamada value que es en donde vamos a ir colocando toda la información que le quedamos proveer a nuestros hijos, es decir a cualquier parte de la aplicación.

    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
};

export default CartContextComponent;
