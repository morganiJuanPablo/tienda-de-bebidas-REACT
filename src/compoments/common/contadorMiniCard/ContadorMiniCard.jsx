import useCounter from "../../utils/useCounter/useCounter";
import styles from "./ContadorMiniCard.module.css";

const Contador = () => {
  const { contador, sumar, restar } = useCounter(1);

  return (
    <div className={styles.contador}>
      <button onClick={restar}>
        <b>-</b>
      </button>
      <p>
        <b>{contador}</b>
      </p>
      <button onClick={sumar}>
        <b>+</b>
      </button>
    </div>
  );
};
export default Contador;
