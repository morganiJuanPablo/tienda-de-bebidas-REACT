import styles from "./CheckoutCompra.module.css";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const CheckoutCompra = ({
  cart,
  total,
  handleSubmit,
  handleChange,
  orderId,
  setBtnComprar,
  btnComprar,
  userData,
}) => {

  const handleFormSubmit = (event) => {
    handleSubmit(event); // Ejecuta la función original de envío del formulario
    setBtnComprar(false); // Deshabilita el botón después del envío
  };


  return (
    <section className={styles.containerCheckout}>
      <div className={styles.purchaseDetail}>
        <h2>Detalle de tu compra</h2>
        {cart.map((element) => {
          return (
            <div key={element.id}>
              <h3>{element.tittle}</h3>
              <p>Unidades: {element.quantity}</p>
            </div>
          );
        })}
        <p className={styles.total}>
          Total: <b>{total}</b> €
        </p>
      </div>
      <div className={styles.purchaseForm}>
        {!orderId ? (
          <>
            <h2>Ya casi lo tienes</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                onChange={handleChange}
                required="Este campo es obligatorio"
              />
              <input
                type="text"
                placeholder="Ingrese su telefono"
                name="phone"
                onChange={handleChange}
                required="Este campo es obligatorio"
              />
              <input
                type="text"
                placeholder="Ingrese su email"
                name="email"
                onChange={handleChange}
                required="Este campo es obligatorio"
              />
              {btnComprar ? (
                <button type="submit">
                  Comprar
                </button>
              ) : (
                <button>
                  <CircularProgress sx={{ scale: "60%" }} />
                </button>
              )}
            </form>
          </>
        ) : (
          <>
            <section className={styles.purchaseConfirm}>
              <img
                src="https://res.cloudinary.com/dqykftyy6/image/upload/v1691303855/wPuschaseConfirm-01_ullmva.png"
                alt=""
              />
              <h3>LA COMPRA FUE UN ÉXITO.</h3>
              <p>Gracias por confiar en nosotros.</p>
              <p>
                <b>¡Salud!</b>
              </p>
              <p>
                <br />
                Código de resguardo: <br />
                {orderId}
              </p>
              <Link to={"/"}>Ir al inicio</Link>
            </section>
          </>
        )}
      </div>
    </section>
  );
};

export default CheckoutCompra;
