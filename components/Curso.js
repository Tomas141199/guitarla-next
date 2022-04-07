import Link from "next/Link";
import styles from "../styles/Curso.module.css";

const Curso = ({ cursos }) => {
  const { titulo, contenido, imagen } = cursos;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className={`heading ${styles.text_blanco}`}>{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>

          <Link href={"#"}>
            <a className={styles.enlace}>Mas informacion</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 10rem;
          margin-top: 10rem;
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen.url});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
    </section>
  );
};

export default Curso;
