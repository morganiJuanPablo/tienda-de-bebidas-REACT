import Cards from "../../common/cards/cards";
import HeaderCategory from "../../common/headersCategory/HeaderCategory";
import styles from "./ItemList.module.css";
import { Skeleton } from "@mui/material";

const ItemList = ({ items, header }) => {

  let cantidadSkeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <section>
        {header.map((head) => (
          <HeaderCategory key={head.category} head={head} />
        ))}
      </section>
      <div className={styles.padreContenedorItems}>
        <section className={styles.contenedorItems}>
          {items.length > 0
            ? items.map((item) => <Cards key={item.id} item={item} />)
            : cantidadSkeleton.map(() => (
                <Skeleton variant="rectangular" width={330} height={555} />
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
