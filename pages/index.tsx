import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HotBids from "../components/HotBids";
import TopCollections from "../components/TopCollections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unit - The NFT Market</title>
        <meta name="description" content="Buy, sell and collect NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <HotBids />
        <TopCollections />
      </main>
    </>
  );
}
