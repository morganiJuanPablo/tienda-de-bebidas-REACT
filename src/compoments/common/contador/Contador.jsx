import useCounter from "../../utils/useCounter/useCounter";
import styles from "./Contador.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Contador = ({ agregarCarrito, actualQuantityCart, stock }) => {
  const { contador, sumar, restar } = useCounter(actualQuantityCart,stock);

  return (
    <div className={styles.logicaCarrito}>
      <div className={styles.contador}>
        <Button disabled={contador <= 1 && true} disableRipple onClick={restar}>
          <b>-</b>
        </Button>
        <p>
          <b>{contador}</b>
        </p>
        <Button
          disabled={contador >= stock ? true : false}
          disableRipple
          onClick={sumar}
        >
          <b>+</b>
        </Button>
      </div>
      <button
        className={styles.btnAñadir}
        onClick={() => agregarCarrito(contador)}
      >
        Añadir
      </button>
      <Link to="/cart">
        <button className={styles.btnIrCarrito}>Ir al carrito</button>
      </Link>
      <div />
    </div>
  );
};
export default Contador;
