import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import ProductList from "@/components/ProductList";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Torreblanca Restaurant</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <ProductList />
        <Featured />
        <Hero />
      </Layout>
    </div>
  );
}
