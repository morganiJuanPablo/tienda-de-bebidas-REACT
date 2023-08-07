import Cards from "../../common/cards/cards";
import HeaderCategory from "../../common/headersCategory/HeaderCategory";
import styles from "./ItemList.module.css";
import { Skeleton } from "@mui/material";

const ItemList = ({ items, header, onTop }) => {
  let cantidadSkeleton = [0, 1, 2, 3, 4, 5];
  let headerSkeleton = [0];

  return (
    <>
      <section>
        {header.length > 0
          ? header.map((head) => (
              <HeaderCategory key={head.category} head={head} />
            ))
          : headerSkeleton.map(() => (
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%" }}
                height={370}
              />
            ))}
      </section>
      <div className={styles.padreContenedorItems}>
        <section className={styles.contenedorItems}>
          {items.length > 0
            ? items.map((item) => <Cards key={item.id} item={item} />)
            : cantidadSkeleton.map(() => (
                <Skeleton
                  sx={{ margin: "1rem auto" }}
                  variant="rectangular"
                  width={330}
                  height={545}
                />
              ))}
        </section>
      </div>

      <button onClick={() => onTop()} className={styles.btnOnTop}>
        <img
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1691319125/btnOnTop_yopdqr.png"
          alt="Ir arriba"
        ></img>
      </button>

      <div className={styles.contenedorBanner}>
        <div className={styles.contenidoBanner}>
          <p className={styles.descuento}>
            <b>10%</b>OFF
          </p>
          <p className={styles.textoBanner}>
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
