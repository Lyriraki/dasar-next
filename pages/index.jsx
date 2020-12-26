import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
    mainTitle="My Home is News"
    footer={`Copyright ${new Date().getFullYear()}`}
    className={styles.container}>
      <Head>
        <title>Dasar NextJS-Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>
      </main>
    </Layout>
  );
}
