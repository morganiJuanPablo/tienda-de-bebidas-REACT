import React, { useState, useEffect } from "react";
import styles from "./legalCheck.module.css";

const LegalCheck = ({ legalPage, setLegalPage }) => {
  const [isAdult, setIsAdult] = useState(
    localStorage.getItem("isAdult") === "true"
  );

  const handleConfirmation = () => {
    localStorage.setItem("isAdult", "true");
    setIsAdult(true);
    setLegalPage(false);
  };

  useEffect(() => {
    if (isAdult) {
      setLegalPage(false);
    }
  }, [isAdult, setLegalPage]);

  if (!legalPage) {
    return null;
  }
  return (
    <div className={styles.contenedorPadre}>
      <div className={styles.bienvenidaLegalCheck}>
        <h1>Bienvenido a </h1>
        <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687260436/wineryLogo_kvwktq.svg" />
      </div>
      <h2>¿Eres mayor de edad?</h2>
      <div className={styles.botonesLegalCheck}>
        <button onClick={handleConfirmation}>SI</button>
        <button>
          <a href="https://www.google.com/">NO</a>
        </button>
      </div>
    </div>
  );
};

export default LegalCheck;
