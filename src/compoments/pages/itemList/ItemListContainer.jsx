import ItemList from "./ItemList";
import { useState, useEffect, useContext } from "react";
import { dataBase } from "../../../Firebase";
import { headersCategory } from "../../../headers";
import { useParams } from "react-router-dom";
//Firebase tiene sus propios métodos
import { getDocs, collection, query, where } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
  const [header, setHeader] = useState([]);
  const { categoryName } = useParams();

 

  useEffect(() => {
    let totalProducts = collection(dataBase, "products");
    let consulta;
    if (!categoryName) {
      consulta = query(totalProducts, where("category", "==", "premiados"));
    } else {
      consulta = query(totalProducts, where("category", "==", categoryName));
    }
    //Siempre se accede a la propiedad docs que siempre está en el objeto que nos devuelve la promesa
    getDocs(consulta).then((resp) => {
      let nuevoArreglo = resp.docs.map((products) => {
        //.data() permite desencriptar la info que viene rara
        return { ...products.data(), id: products.id };
      });
      setItems(nuevoArreglo);
    });
  }, [categoryName]);

  return <ItemList items={items} header={header} />;
};

export default ItemListContainer;
