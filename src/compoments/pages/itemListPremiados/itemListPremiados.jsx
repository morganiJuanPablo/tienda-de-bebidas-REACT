
import Styles from "./Home.module.css"


const Home = ({sumar}) => {

  return (
    <div className= {Styles.fondoHome}> 
      <button onClick={sumar} className= {Styles.btnAcumulador}>AÑADIR AL CARRITO</button>     
    </div>
  )
}

export default Home


