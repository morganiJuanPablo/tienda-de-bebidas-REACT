import styles from "./modalLegalCheck.module.css";

const ModalLegalCheck = () => {
  return (
    <section className={styles.modal}>
      <div className={styles.modalContainer}>
        <h1>Lo sentimos</h1>
        <p>No puedes ingresar al sitio</p>
      </div>
    </section>
  );
};

export default ModalLegalCheck;
