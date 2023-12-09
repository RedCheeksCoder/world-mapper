import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to={"/"}>
      <div className={styles.logo}>
        <img
          src="/world-mapper-logo-removebg.png"
          alt="WorldMapper logo"
          className={styles.logo}
        />
        <h4 className="logoText">WorldMapper</h4>
      </div>
    </Link>
  );
}

export default Logo;
