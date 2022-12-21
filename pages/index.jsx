import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          expedita voluptatem distinctio possimus, dolores fuga neque ea
          delectus veniam harum eveniet repellendus praesentium voluptatibus,
          adipisci quidem iste officia, placeat vel!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          expedita voluptatem distinctio possimus, dolores fuga neque ea
          delectus veniam harum eveniet repellendus praesentium voluptatibus,
          adipisci quidem iste officia, placeat vel!
        </p>
        <Link className={styles.btn} href="/ninjas">
          See ninja listing
        </Link>
      </div>{" "}
    </>
  );
}
