import Head from "next/head";
import Footer from "../pages/home/Footer";
import Header from "../pages/home/Header";

interface Props {
  title: string;
  children: any;
}
export default ({ title, children }: Props) => {
  return (
    <>
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
    </>
  );
};
