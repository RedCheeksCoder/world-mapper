import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="about-logo.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldMapper.</h2>
          <p>
            As you traverse the globe, every city you visit is marked, creating
            a personalized map of your adventures. This interactive feature
            brings your journeys to life, making each trip more memorable than
            the last.
          </p>
          <p>
            The primary goal of our app is to commemorate your experiences. We
            believe in celebrating every journey, every city, and every memory.
            By logging your travels, we transform your experiences into lasting
            memories, creating a digital scrapbook of your adventures that you
            can share with friends and family. Experience the joy of travel with
            us.
          </p>
        </div>
      </section>
    </main>
  );
}
