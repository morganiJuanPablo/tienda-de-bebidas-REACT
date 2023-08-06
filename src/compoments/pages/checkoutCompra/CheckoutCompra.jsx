import styles from "./CheckoutCompra.module.css";

const CheckoutCompra = ({
  cart,
  total,
  handleSubmit,
  handleChange,
  orderId,
  setLoading,
  loading,
}) => {
  console.log(cart);
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
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="ingrese su nombre"
                name="name"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="ingrese su telefono"
                name="phone"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="ingrese su email"
                name="email"
                onChange={handleChange}
              />
            </form>
            {!loading ? (
              <button type="submit" onClick={() => setLoading(true)}>
                Comprar
              </button>
            ) : (
              "cargando "
            )}
          </>
        ) : (
          <h3>Su numero de compra: {orderId} </h3>
        )}
      </div>
    </section>
  );
};

export default CheckoutCompra;
