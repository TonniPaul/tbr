import { ReactNode, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Loader from "../Loader/Loader";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title: string;
};

function Layout({ children, title }: Props) {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   if (isLoading) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [isLoading]);

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <Head>
        <meta
          name="description"
          content="The best thrift clothing and accessories are handpicked especially for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.jpg" />
        <title>{`${title} -Thrifts By Ronn Store`}</title>
      </Head>

      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Layout;
