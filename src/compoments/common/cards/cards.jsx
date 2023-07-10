import Styles from "./Cards.module.css";

const Cards = (/* {item} */) => {
  return (
    <div className={Styles.contenedorCard}>
      <div className={Styles.contenedorIconosFoto}>
        <div className={Styles.contenedorIconos}>
          <div className={Styles.icono}>
            <img
              src="https://res-console.cloudinary.com/dqykftyy6/thumbnails/transform/v1/image/upload/Y19zY2FsZSxoXzQ0LHdfMjA=/v1688405598/UHJveWVjdG9SZWFjdENvZGVyL0ljb25vcy9JY29ub1ByZXNlbnRhY2lvbl9wdnB3cnc=/template_primary"
              alt="Presentación"
            />
          </div>

          <p className={Styles.detallesIcono}>750ml</p>

          <div className={Styles.icono}>
            <img
              src="https://res-console.cloudinary.com/dqykftyy6/thumbnails/transform/v1/image/upload//v1688405598/UHJveWVjdG9SZWFjdENvZGVyL0ljb25vcy9JY29ub1ByZXNlbnRhY2lvbl9wdnB3cnc=/drilldown"
              alt="Varietal"
            />
          </div>

          <p className={Styles.detallesIcono}>Garnacha</p>

          <div className={Styles.icono}>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1688133484/ProyectoReactCoder/Iconos/IconoOrigen_cppj4h.svg"
              alt="Origen"
            />
          </div>

          <p className={Styles.detallesIcono}>España</p>

          <div className={Styles.icono}>
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1688407210/ProyectoReactCoder/Iconos/IconoGraduacion_u3dmfo.svg"
              alt="Graduación"
            />
          </div>
          <p className={Styles.detallesIcono}>14%</p>
        </div>
        <div className={Styles.PhotoProduct}>
          <img
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1687971138/ProyectoReactCoder/Premiados/vino-blanco-enate-chardonnay-f-barrica-2021_x3egjp.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={Styles.contenedorPieCard}>
        <div className={Styles.nombreBebida}>
          <p>Señorío de Nevada 2021</p>
        </div>
        <div className={Styles.contenedorBtnsCard}>
          <p className={Styles.precio}>8 €</p>
          <button className={Styles.btnAñadir}>Añadir</button>
          <button className={Styles.btnItemDetail}>+info</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
