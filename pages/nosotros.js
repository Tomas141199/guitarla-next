import Layout from "../components/Layout";
import Image from "next/Image";
import styles from "../styles/Nosotros.module.css";
import Fade from "react-reveal/Fade";
const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div>
          <div className={styles.contenido}>
            <Fade>
              <Image
                layout="responsive"
                src="/img/nosotros.jpg"
                width={600}
                height={450}
                alt="nosotros image"
              />
            </Fade>

            <div>
              <p>
                Incididunt ea quis irure ex esse sit culpa ut aliqua. Dolore
                veniam consectetur deserunt dolore labore labore eu duis qui
                velit exercitation Lorem. Ipsum enim reprehenderit elit deserunt
                culpa.
              </p>
              <p>
                Veniam id id dolor non pariatur ad magna minim elit. Qui aliquip
                Lorem irure aliqua dolore. Labore aute ullamco dolore aliquip
                qui culpa esse quis.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
