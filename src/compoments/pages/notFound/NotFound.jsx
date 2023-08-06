import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className={styles.notFoundContent}>
        <img
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1691302386/404-01_jvlfh2.png"
          alt=""
        />
        <p>Not found</p>
        <Link to="/" className={styles.btnInicio}>
          <button>
            Volver a <b>Winery</b>
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
