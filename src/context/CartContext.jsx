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
            quantity: product.quantity + 1,
          };
        } else {
          return { ...elemento, quantity: 1,}
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

  const getTotalQuantity=()=>{
    let total = cart.reduce((acc,elemento)=>{
      return acc + elemento.quantity
    },0)
    return total;
  }

  const totalPrice =()=>{
    let total = cart.reduce((acc,elemento)=>{
      return acc + (elemento.price * elemento.quantity)
    },0)
    return total;
  }

  const getQuantityById = (id) =>{
    let producto=cart.find ((elemento) => elemento.id === +id)
    /* return producto ? producto.quantity : undefined */
    return producto?.quantity
  }

  const Add1fromCards = () =>{
    let producto = cart.find ((elemento) => elemento.quantity)
    return producto+1
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    totalPrice,
    getQuantityById,
    Add1fromCards
  };


  return (
    //No retorna HTML, sino que se retorna el contexto con su método Provider Dentro Le damos acceso así a que todos los hijos puedan acceder ala información. A su vez tiene una propiedad llamada value que es en donde vamos a ir colocando toda la información que le quedamos proveer a nuestros hijos, es decir a cualquier parte de la aplicación.

    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
};

export default CartContextComponent;
