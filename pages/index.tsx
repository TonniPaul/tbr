import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import Hero from "@/components/Hero/Hero";
import FeedBackSection from "@/components/FeedBackSection/FeedBackSection";
import Layout from "@/components/Layout/layout";
import { fetchProducts } from "../fetcher/fetcher";
import { MyProductProps } from "@/interface/AllProduct";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

export default function Home({ products }: MyProductProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);
  return (
    <>
      {isLoading && <Loader />}

      <Layout title="Home">
        <main>
          <Hero />
          <section>
            <ProductSectionsCard
              title={"New Arrivals"}
              product={products.slice(5, 10)}
            />
            <ProductSectionsCard
              title={"Gowns Section"}
              product={products.slice(0, 5).reverse()}
            />
          </section>
          <FeedBackSection />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
}
