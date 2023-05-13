import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import Hero from "@/components/Hero/Hero";
import FeedBackSection from "@/components/FeedBackSection/FeedBackSection";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { fetchProducts } from "./staticProp";
import { MyProductProps } from "@/interface/AllProduct";

export default function Home({ products }: MyProductProps) {
  const router = useRouter();

  const handleProductRoute = (productId: string) => {
    router.push(`/shop/${productId}`);
  };

  return (
    <>
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
