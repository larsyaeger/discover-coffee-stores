import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Image from "next/image";
import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores, //coffeeStores, === coffeeStores: coffeeStores,
    },
  };
}

export default function Home(props) {
  console.log("props here", props);
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
          {props.coffeeStores.map((coffeeStore) => {
            return (
              <Card
                key={coffeeStore.id}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
