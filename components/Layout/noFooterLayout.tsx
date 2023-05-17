import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title?: string;
};

function NoFooterLayout({ children, title }: Props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The best thrift clothing and accessories are handpicked especially for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.jpg" />
        <title>
          {title ? `${title} - TBR Store` : "Thrifts By Ronn Store"}
        </title>
      </Head>

      <Navbar />
      {children}
      <ScrollToTop />
    </>
  );
}

export default NoFooterLayout;
