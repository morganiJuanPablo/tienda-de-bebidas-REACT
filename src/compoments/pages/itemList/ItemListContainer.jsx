import ItemList from "./ItemList";
import { Bodega } from "../../../productsMock";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const pintarProductos = new Promise((resolve, reject) => {
    resolve(Bodega);
    });
    pintarProductos
    .then((respuesta) => setItems(respuesta))
    .catch((error)=>console.log(error))
  }, []);

  

  return (
  <ItemList items={items}/>
  )};
export default ItemListContainer;
