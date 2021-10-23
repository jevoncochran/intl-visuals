import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import FeaturedWork from "../components/Home/FeaturedWork";

export default function Home() {
  return (
    <Layout>
      <FeaturedWork />
    </Layout>
  );
}
