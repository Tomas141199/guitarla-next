import Link from "next/Link";
import styles from "../styles/Header.module.css";
import Image from "next/Image";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                src="/img/logo.svg"
                width={400}
                height={100}
                alt="Imagen Logo"
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  layout="fixed"
                  src="/img/carrito.png"
                  width={30}
                  height={25}
                  alt="carrito-icon"
                />
              </a>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>{guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>$ {guitarra.precio}</p>

            <Link
              href={{
                pathname: "/guitarra/[url]",
                query: { url: guitarra.url },
              }}
            >
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="guitarra header"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
