import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hangleOnBannerBtnClick");
  };
  return (
    <div>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="Background image"
          />
        </div>
        <div className={styles.cardLayout}>
          <Card
            name="darkhorse coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
            className={styles.card}
          />
          <Card
            name="darkhorse coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
            className={styles.card}
          />
          <Card
            name="darkhorse coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
            className={styles.card}
          />
        </div>
      </main>
    </div>
  );
}
