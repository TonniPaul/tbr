import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import Hero from "@/components/Hero/Hero";
import FeedBackSection from "@/components/FeedBackSection/FeedBackSection";
import Head from "next/head";
import productsData from "../public/json/products.json";
import { useState } from "react";
import { MyProductProps } from "@/interface/ProductsProps";

export default function Home() {
  const [myProduct, setMyProduct] = useState<MyProductProps[]>(productsData);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The best thrift clothing and accessories are handpicked especially for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.jpg" />
        <title>Thrifts By Ronn Store</title>
      </Head>
      <main>
        <Hero />
        <ProductSectionsCard />
        <FeedBackSection />
      </main>
    </>
  );
}
