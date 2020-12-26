import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout
      mainTitle="My About is News"
      footer={`Copyright ${new Date().getFullYear()}`}
      className={styles.container}
    >
      <Head>
        <title>Dasar NextJS-Mbuh</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My SEO React App With Next JS" />
        <meta name="keywords" content="Next React SEO" />
        <meta name="author" content="Lyriraki" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mbuh</h1>
      </main>

      <footer className={styles.footer}>Powered by Lyriraki</footer>
    </Layout>
  );
}
