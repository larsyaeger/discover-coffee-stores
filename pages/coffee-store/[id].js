import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoresData from "../../data/coffee-stores.json";
import Head from "next/head";

export function getStaticProps({ params }) {
  console.log("params here", params);
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic coffee store id
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  console.log("props:", props);
  const router = useRouter();
  console.log("router", router.query);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { address, name, neighbourhood } = props.coffeeStore;
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">back to home</Link>
      <br />
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeeStore;
