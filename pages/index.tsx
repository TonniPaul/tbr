import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import Hero from "@/components/Hero/Hero";
import FeedBackSection from "@/components/FeedBackSection/FeedBackSection";
import Head from "next/head";
import productsData from "../public/json/products.json";
import { useState } from "react";
import { AllProducts, MyPro } from "@/interface/AllProduct";
import useSWR from "swr";
import Loader from "@/components/Loader/Loader";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/products", fetcher);
  if (error) return <div>Error fetching comments</div>;
  if (!data) return <Loader />;

  const products = data;
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
        <ProductSectionsCard title={"NEW Product"} product={products} />
        <ProductSectionsCard title={"All Product"} product={products} />
        <FeedBackSection />
      </main>
    </>
  );
}
