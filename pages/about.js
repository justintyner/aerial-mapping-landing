import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Aerial Mapping Solutions</title>
        <meta name="description" content="Learn more about our aerial mapping services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.description}>
          <p>
            We are a team of experienced professionals dedicated to providing high-quality aerial mapping and surveying services.
            Our state-of-the-art equipment and expertise allow us to deliver precise and detailed results for all your mapping needs.
          </p>
        </div>
      </main>
    </div>
  );
}
