import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import GlobalStyles from "@/styles/app.styles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
