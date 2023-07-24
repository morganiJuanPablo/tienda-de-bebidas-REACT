import styles from "./HeaderCategory.module.css";

const HeaderCategory = ({ head }) => {
  return (
    <>
      <div className={styles.contenedorBanner}>
        <img src={head.img} />
      </div>
      <div className={styles.contenedorTitulo}>
        <h2>{head.tittle}</h2>
      </div>
    </>
  );
};

export default HeaderCategory;
