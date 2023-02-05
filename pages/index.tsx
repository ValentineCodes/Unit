import Head from "next/head";
import PageLayout from "../components/layouts/PageLayout";
import Footer from "../components/pages/home/Footer";
import Header from "../components/pages/home/Header";
import Hero from "../components/pages/home/Hero";
import HotBids from "../components/pages/home/HotBids";
import Newsletter from "../components/pages/home/Newsletter";
import TopCollections from "../components/pages/home/TopCollections";
import TrendingCategories from "../components/pages/home/TrendingCategories";

export default function Home() {
  return (
    <PageLayout title="The NFT Market">
      <Hero />

      <HotBids />

      <section className="bg-[#D1EEFC]/10">
        <TopCollections />
      </section>

      <TrendingCategories />

      <section className="bg-[#D1EEFC]/10">
        <Newsletter />
      </section>
    </PageLayout>
  );
}
