import Head from "next/head";
import Footer from "../components/pages/home/Footer";
import Header from "../components/pages/home/Header";
import Hero from "../components/pages/home/Hero";
import HotBids from "../components/pages/home/HotBids";
import Newsletter from "../components/pages/home/Newsletter";
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

      <section className="bg-[#D1EEFC]/10">
        <TopCollections />
      </section>

      <section>
        <TrendingCategories />
      </section>

      <section className="bg-[#D1EEFC]/10">
        <Newsletter />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
