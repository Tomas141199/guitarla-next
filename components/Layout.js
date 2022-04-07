import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>

        <meta name="description" content="Generated by create next app" />
        <meta
          name="description"
          content="Sitio web para venta de guitarrar electricar"
        />
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
