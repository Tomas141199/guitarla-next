import Fade from "react-reveal/Fade";
import Entrada from "./Entrada";
import styles from "../styles/Blog.module.css";

const ListadoBlog = ({ entradas }) => {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        <Fade>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default ListadoBlog;
