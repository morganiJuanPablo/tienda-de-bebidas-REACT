import Cards from "../../common/cards/cards";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <>
      
      <div className={styles.padreContenedorItems}>
        <section className={styles.contenedorItems}>
          {items.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </section>
      </div>
    </>
  );
};

export default ItemList;
