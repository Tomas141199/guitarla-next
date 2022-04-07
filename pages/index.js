import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";
export default function Home({ guitarras, cursos, entradas }) {
  return (
    <div>
      <Layout pagina="Inicio" guitarra={guitarras[0]}>
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <Listado guitarras={guitarras} />
        </main>
        <Curso cursos={cursos} />
        <ListadoBlog entradas={entradas} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, cursos, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      cursos,
      entradas,
    },
  };
}
