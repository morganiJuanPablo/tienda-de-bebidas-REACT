import styles from "./HeaderCategory.module.css";

const HeaderCategory = () => {
  return (
    <>
    <div>
      <div className={styles.contenedorHeader}>
        <div className={styles.banner} />
      </div>
      <div className={styles.contenedorTitulo}>
        <h2>VINOS TINTOS</h2>
      </div>
    </div>
    </>
  );
};

export default HeaderCategory;
