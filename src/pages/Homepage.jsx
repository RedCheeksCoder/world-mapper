import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Embark on a journey around the globe.
          <br />
          World Mapper captures your expeditions.
        </h1>
        <h2>
          A comprehensive map that marks your travels through all the cities
          you’ve visited. <br />
          Preserve your memorable adventures and let your friends marvel at your
          worldwide wanderings.
        </h2>
        <Link to={"/login"} className="cta">
          Start Mapping now
        </Link>
      </section>
    </main>
  );
}
