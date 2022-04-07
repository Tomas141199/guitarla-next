import Layout from "../../components/Layout";
import Image from "next/Image";
import styles from "../../styles/Guitarra.module.css";
import { useState } from "react";

const GuitarraTienda = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const { id, nombre, descripcion, precio, imagen } = guitarra;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("cantidad no valida");
      return;
    }

    //Se agrega al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          src={imagen.url}
          width={180}
          height={350}
          alt={`imagen guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>$ {precio}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="">Cantidad:</label>
            <select
              name="cantidad"
              id="cantidad"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              value={cantidad}
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
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  return {
    props: {
      guitarra: guitarra[0],
    },
  };
}

export default GuitarraTienda;
