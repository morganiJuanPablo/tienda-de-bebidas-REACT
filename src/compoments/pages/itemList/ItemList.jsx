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
      <div className={styles.contenedorBanner}>
        <div className={styles.contenidoBanner}>
          <p style={{ fontFamily: "Poppins", fontSize: "12rem" }}>
            <b>10%</b>OFF
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "1.8rem" }}>
            Si tu compra supera los 30€. Revisa los términos y condiciones.
            Comienza a disfrutar de este beneficio desde hoy hasta lo que quede
            de este 2023.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemList;
