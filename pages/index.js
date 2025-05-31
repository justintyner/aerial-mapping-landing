import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wyndstep - Aerial Mapping Solutions</title>
        <meta name="description" content="Professional aerial mapping and surveying services by Wyndstep" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Wyndstep Logo"
              width={300}
              height={100}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h1 className={styles.title}>
            Welcome to Wyndstep
          </h1>
          <p className={styles.description}>
            Professional aerial mapping and surveying services for your projects
          </p>
          <div className={styles.heroImage}>
            <Image
              src="/hero.gif"
              alt="Aerial Mapping Demo"
              width={800}
              height={450}
              priority
            />
          </div>
          <button className={styles.ctaButton}>
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2>Our Services</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Aerial Photography</h3>
              <p>High-resolution aerial imagery for detailed analysis</p>
            </div>
            <div className={styles.featureCard}>
              <h3>3D Mapping</h3>
              <p>Accurate 3D terrain models and point clouds</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Surveying</h3>
              <p>Precise measurements and topographic surveys</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Ready to start your project? Get in touch with us today.</p>
          <button className={styles.contactButton}>
            Contact Now
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Wyndstep. All rights reserved.</p>
      </footer>
    </div>
  );
}
