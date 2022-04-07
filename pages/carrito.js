import Layout from "./../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/Image";
import { useState, useEffect } from "react";
const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout pagina={"Carrito de compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div className="">
                    <Image
                      layout="responsive"
                      src={producto.imagen}
                      width={250}
                      height={500}
                      alt={`guitarra - ${producto.nombre}`}
                    ></Image>
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>

                      <select
                        name="cantidad"
                        id="cantidad"
                        className={styles.select}
                        value={producto.cantidad}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="" disabled>
                          -- Seleccione ---
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $ <span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.eliminar}
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    x
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          {total > 0 ? (
            <>
              <p>Resumen del Pedido</p>
              <p>Total a pagar ${total}</p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
