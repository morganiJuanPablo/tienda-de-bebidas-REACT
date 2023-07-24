import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { headersCategory } from "../../../headers";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [header, setHeader] = useState([]);
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

    let headerCategory;
    headerCategory = headersCategory.filter(
      (encabezado) => encabezado.category === categoryName
    );

    const tarea2 = new Promise((resolve, reject) => {
      resolve(headerCategory);
    });
    tarea2
      .then((respuesta) => setHeader(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} header={header} />;
};

export default ItemListContainer;
