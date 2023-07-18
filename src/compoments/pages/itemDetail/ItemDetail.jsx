import Contador from "../../common/contador/Contador";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product, agregarCarrito }) => {
  return (
    <div className={styles.contenedorPadre}>
      <div className={styles.contenedor}>
        <div className={styles.contenedorImg}>
          <img src={product.img} />
        </div>
        <div className={styles.contenedorInfo}>
          <div>
            <h2 className={styles.nombreProducto}>{product.tittle}</h2>
            <p className={styles.detalleProducto}>{product.description}</p>
          </div>
          <div className={styles.precioProducto}>
            <p>
              <b>{product.price}</b>€
            </p>
          </div>
          <div className={styles.logicaCarrito}>
            <Contador />
            <button className={styles.btnAñadir}>Añadir</button>
            <button className={styles.btnIrCarrito}>Ir al carrito</button>
          </div>
          <div className={styles.contenedorIconos}>
            <div>
              <img
                className={styles.icono}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-02_migynq.png"
                alt="Presentación"
              />
            </div>

            <p className={styles.detallesIcono}>hfghfghfgh</p>

              <div>
                <img
                  className={styles.icono}
                  src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-03_yrdaal.png"
                  alt="Varietal"
                />
              </div>

            <p className={styles.detallesIcono}>sfsdfsdfsdf</p>

              <div>
                <img
                  className={styles.icono}
                  src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250699/ProyectoReactCoder/IconsIremDetail/Icons-04_wl8wmj.png"
                  alt="Origen"
                />
              </div>

            <p className={styles.detallesIcono}>sdfsdfsdf</p>

            <div>
              <img
                className={styles.icono}
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689250886/ProyectoReactCoder/IconsIremDetail/Icons-01_uuphhk.png"
                alt="Graduación"
              />
            </div>
            <p className={styles.detallesIcono}>sdasdasd</p>
          </div>
        </div>
      </div>
      <div className={styles.contenedorBannerEnvios}>
        <div className={styles.contenidoBannerEnvios}>
          <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1689623981/ProyectoReactCoder/Footer/truckBannerEnvios-01_oarao9.png" />
          <p className={styles.envioGratisTittle}>
            <b>envío</b>gratis
          </p>
          <p className={styles.envioGratisDescription}>
            Si vives en Madrid. Revisa los términos y condiciones. Comienza a
            disfrutar de este beneficio desde hoy hasta lo que quede de este
            2023.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
