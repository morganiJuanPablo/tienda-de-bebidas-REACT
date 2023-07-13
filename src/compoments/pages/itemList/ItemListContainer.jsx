import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados;
    if (categoryName === undefined) {
      productosFiltrados = products.filter(
        (elemento) => elemento.category === "premiados"
      );
    } else {
      productosFiltrados = products.filter(
        (elemento) => elemento.category === categoryName
      );
    }

    const tarea = new Promise((resolve, reject) => {
      resolve(productosFiltrados);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
