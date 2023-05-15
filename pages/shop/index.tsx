import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import { ShopPageStyles } from "@/styles/shop.styles";
import { MyProductProps } from "@/interface/AllProduct";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import Layout from "@/components/Layout/layout";
import { fetchProducts } from "../../fetcher/fetcher";

const Shop = ({ products }: MyProductProps) => {
  return (
    <>
      <Layout title={"Shop"}>
        <ShopPageStyles>
          <SearchFilter
            handleFilterByCategory={(e) => {}}
            onChange={function (
              searchValue: string,
              filterValue: string
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <ProductSectionsCard product={products} />
        </ShopPageStyles>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
}

export default Shop;
