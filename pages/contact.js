import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Aerial Mapping Solutions</title>
        <meta name="description" content="Get in touch with our aerial mapping team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.description}>
          <p>
            Ready to start your project? Get in touch with us today.
          </p>
          <div className={styles.contactInfo}>
            <p>Email: info@wyndstep.co</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Mapping Street, City, State 12345</p>
          </div>
        </div>
      </main>
    </div>
  );
}
