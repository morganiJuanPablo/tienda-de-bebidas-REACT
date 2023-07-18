import useCounter from "../../utils/useCounter/useCounter";
import styles from "./Contador.module.css"

const Contador = ({agregarCarrito}) => {
const { contador, sumar, restar} = useCounter(1); 




  return (
    <div className={styles.logicaCarrito}>
    <div className={styles.contador}>
      <button onClick={restar}><b>-</b></button>
      <p><b>{contador}</b></p>
      <button onClick={sumar}><b>+</b></button>
    </div>
    <button className={styles.btnAñadir} onClick={()=> agregarCarrito(contador)}>Añadir</button>
    <button className={styles.btnIrCarrito}>Ir al carrito</button>
    <div/>
    </div>
  );
};
export default Contador;
