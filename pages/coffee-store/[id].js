import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoresData from "../../data/coffee-stores.json";

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
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
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
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">back to home</Link>
      <Link href="/coffee-store/one">go to page dynamic</Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  );
};

export default CoffeeStore;
