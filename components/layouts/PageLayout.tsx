import React from "react";
import Head from "next/head";

import Footer from "./modules/Footer";
import Header from "./modules/Header";

interface Props {
  title: string;
  children: any;
}

export default ({ title, children }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Buy, sell and collect NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        {children}

        <Footer />
      </main>
    </div>
  );
};
