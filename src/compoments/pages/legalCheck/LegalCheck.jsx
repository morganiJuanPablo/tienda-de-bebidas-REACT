import ModalLegalCheckContainer from "../../common/modalLegalCheck/ModalLegalCheckContainer";
import styles from "./legalCheck.module.css";

const LegalCheck = ({ legalPage, setLegalPage, modal, setModal }) => {
  return (
    <div className={styles.contenedorPadre}>
      <div className={styles.bienvenidaLegalCheck}>
        <h1>Bienvenido a </h1>
        <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687260436/wineryLogo_kvwktq.svg" />
      </div>
      <h2>¿Eres mayor de edad?</h2>
      <div className={styles.botonesLegalCheck}>
        <button onClick={() => setLegalPage(!legalPage)}>SI</button>
        <button
          onClick={() =>
            Swal.fire({
              title: "Custom animation with Animate.css",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            })
          }
        >
          <a   href="https://www.google.com/" >NO</a>
        </button>
      </div>
      {modal && <ModalLegalCheckContainer />}
    </div>
  );
};

export default LegalCheck;
