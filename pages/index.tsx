import Head from "next/head";
import Header from "../components/pages/home/Header";
import Hero from "../components/pages/home/Hero";
import HotBids from "../components/pages/home/HotBids";
import TopCollections from "../components/pages/home/TopCollections";
import TrendingCategories from "../components/pages/home/TrendingCategories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unit - The NFT Market</title>
        <meta name="description" content="Buy, sell and collect NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#D1EEFC]/10">
        <section>
          <Header />
        </section>

        <section>
          <Hero />
        </section>
      </div>

      <section>
        <HotBids />
      </section>

      {/* 


        <section id="top_collections" className="home-section">
          <TopCollections />
        </section>

        <section>
          <TrendingCategories />
        </section> */}
    </>
  );
}
