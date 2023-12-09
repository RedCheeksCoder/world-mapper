// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just 500/month.
          </h2>
          <p>
            Let's realive the pictures on your phone. <br />
            For just 500 PHP a month, our World Mapper brings your travel photos
            to life by logging your journeys on a personalized map. It's more
            than just a photo album; it's your interactive travel diary. <br />
            <br />
            <em>Invest not on pictures but in memories.</em>
          </p>
        </div>
        <img
          src="sky-scraper.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
