import styles from "./HeaderCategory.module.css";

const HeaderCategory = () => {
  return (
    <>
    <div>
      <div className={styles.contenedorHeader}>
        <div className={styles.banner}>
        ***IMAGEN REPRESENTATIVA CATEGORIA***
        </div>
        
      </div>
      <div className={styles.contenedorTitulo}>
        <h2>***TITULO CATEGORIA***</h2>
      </div>
    </div>
    </>
  );
};

export default HeaderCategory;
