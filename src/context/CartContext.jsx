import { createContext, useState } from "react";

export const CartContext = createContext(); ///Acá creamos el contexto. Se exporta al igual que el componente para que luego se reciba en cada useContext que utlicemos en los distintos componentes.

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
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
  };


  return (
    //No retorna HTML, sino que se retorna el contexto con su método Provider Dentro Le damos acceso así a que todos los hijos puedan acceder ala información. A su vez tiene una propiedad llamada value que es en donde vamos a ir colocando toda la información que le quedamos proveer a nuestros hijos, es decir a cualquier parte de la aplicación.

    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
};

export default CartContextComponent;
