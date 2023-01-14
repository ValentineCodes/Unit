import "../components/slider/slick.css";
import "../components/slider/slick-theme.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
