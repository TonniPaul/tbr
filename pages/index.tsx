import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import Hero from "@/components/Hero/Hero";
import FeedBackSection from "@/components/FeedBackSection/FeedBackSection";
import Head from "next/head";
import useSWR from "swr";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const router = useRouter();

  const { data, error } = useSWR("/api/products", fetcher);
  if (error) return <div>Error fetching comments</div>;
  if (!data) return <Loader />;

  const products = data;

  const handleProductRoute = (productId: string) => {
    router.push(`/shop/${productId}`);
  };

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
    </>
  );
}
