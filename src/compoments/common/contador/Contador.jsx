import useCounter from "../../utils/useCounter/useCounter";
import styles from "./Contador.module.css"
import { Link } from "react-router-dom";
const Contador = ({agregarCarrito,actualQuantityCart}) => {

const {contador, sumar, restar} = useCounter(actualQuantityCart); 




  return (
    <div className={styles.logicaCarrito}>
    <div className={styles.contador}>
      <button onClick={restar}><b>-</b></button>
      <p><b>{contador}</b></p>
      <button onClick={sumar}><b>+</b></button>
    </div>
    <button className={styles.btnAñadir} onClick={()=> agregarCarrito(contador)}>Añadir</button>
    <Link to="/cart"><button className={styles.btnIrCarrito}>Ir al carrito</button></Link>
    <div/>
    </div>
  );
};
export default Contador;
