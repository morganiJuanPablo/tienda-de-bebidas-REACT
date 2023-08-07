import styles from "./HeaderCategory.module.css";

const HeaderCategory = ({ head }) => {
  console.log(head)
  return (
    <>
      <div className={styles.contenedorBanner}>
        <img src={head.img} />
      </div>
      <div className={styles.contenedorTitulo}>
        <h3>{head.tittle}</h3>
      </div>
    </>
  );
};

export default HeaderCategory;
