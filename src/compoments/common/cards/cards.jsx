import { Link } from "@mui/material";
import Styles from "./Cards.module.css";

const Cards = ({ item }) => {
  return (
    <div className={Styles.contenedorCard}>
      <div className={Styles.contenedorIconosFoto}>
        <div className={Styles.contenedorIconos}>
          <div>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-02_migynq.png"
              alt="Presentación"
            />
          </div>

          <p className={Styles.detallesIcono}>{item.formato}</p>

          <div>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-03_yrdaal.png"
              alt="Varietal"
            />
          </div>

          <p className={Styles.detallesIcono}>{item.varietal}</p>

          <div>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-04_wl8wmj.png"
              alt="Origen"
            />
          </div>

          <p className={Styles.detallesIcono}>{item.origen}</p>

          <div>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250886/ProyectoReactCoder/IconsIremDetail/Icons-01_uuphhk.png"
              alt="Graduación"
            />
          </div>
          <p className={Styles.detallesIcono}>{item.graduación}</p>
        </div>
        <div className={Styles.PhotoProduct}>
          <img src={item.img} />
        </div>
      </div>

      <div className={Styles.contenedorPieCard}>
        <div className={Styles.nombreBebida}>
          <p>{item.tittle}</p>
        </div>
        <div className={Styles.contenedorBtnsCard}>
          <p className={Styles.precio}>
            <b>{item.price}</b>€
          </p>
          <button className={Styles.btnAñadir}>Añadir</button>
          <Link to={`/itemDetail/${item.id}`}>
            <button className={Styles.btnItemDetail}>+info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
