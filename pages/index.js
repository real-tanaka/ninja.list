import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
          dui nibh, eget ornare ligula dignissim ut. Aenean finibus interdum
          laoreet. Aenean sed ex sed leo varius egestas et non lorem. Donec ut
          dolor velit. Praesent mauris dolor, rhoncus id nibh a, ullamcorper
          pretium leo.{" "}
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
          dui nibh, eget ornare ligula dignissim ut. Aenean finibus interdum
          laoreet. Aenean sed ex sed leo varius egestas et non lorem. Donec ut
          dolor velit. Praesent mauris dolor, rhoncus id nibh a, ullamcorper
          pretium leo.{" "}
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
