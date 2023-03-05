import { useRouter } from "next/router";
import Head from "next/head";

const Nextjs = () => {
  const router = useRouter();
  return (
    <div>
      <Head><title>{router.query.id}</title></Head>
      <h1>Welcome to Next.js With Ankita</h1>
      <h2>Page {router.query.id}</h2>
    </div>

  );
};

export default Nextjs;