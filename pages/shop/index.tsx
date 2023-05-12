import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import Loader from "@/components/Loader/Loader";
import { ShopPageStyles } from "@/styles/shop.styles";
import { MyProductProps } from "@/interface/AllProduct";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import Head from "next/head";

const Shop = ({ products }: MyProductProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The best thrift clothing and accessories are handpicked especially for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.jpg" />
        <title>Shop Page</title>
      </Head>

      <ShopPageStyles>
        <SearchFilter
          handleFilterByCategory={(e) => {}}
          onChange={function (searchValue: string, filterValue: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ProductSectionsCard product={products} />
      </ShopPageStyles>
    </>
  );
};

export default Shop;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
