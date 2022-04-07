import Link from "next/link";
import Image from "next/Image";
import styles from "../styles/Entrada.module.css";

import { formatearFecha } from "../helpers";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id, url } = entrada;
  return (
    <article>
      <Image
        priority="true"
        src={imagen.url}
        layout={"responsive"}
        width={800}
        height={600}
        alt={`imagen blog ${titulo}`}
        blurDataURL="/img/nosotros.jpg"
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p>{resumen}</p>
        <Link
          href={{
            pathname: "/blog/[slug]",
            query: { slug: url },
          }}
        >
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
