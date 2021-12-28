import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import FeaturedWork from "../components/Home/FeaturedWork";

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

export default function Home() {
  return (
    <Layout>
      <FeaturedWork />
    </Layout>
  );
}
