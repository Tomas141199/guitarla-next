import Guitarra from "./Guitarra";
import styles from "../styles/Listado.module.css";
import Fade from "react-reveal/Fade";

const Listado = ({ guitarras }) => {
  return (
    <div className={styles.listado}>
      <Fade>
        {guitarras.map((guitarra) => (
          <Guitarra key={guitarra.id} guitarra={guitarra} />
        ))}
      </Fade>
    </div>
  );
};

export default Listado;
