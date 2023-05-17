import ProductSectionsCard from "@/components/Cards/ProductSectionsCard/ProductSectionsCard";
import {
  PaginationBtn,
  PaginationContainer,
  ShopPageStyles,
} from "@/styles/shop.styles";
import { MyProductProps } from "@/interface/AllProduct";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import Layout from "@/components/Layout/layout";
import { fetchProducts } from "../../fetcher/fetcher";
import { useState } from "react";
import Image from "next/image";

const Shop = ({ products }: MyProductProps) => {
  const [searchedResult, setSearchedResult] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);

  const handleSearch = (searchValue: string, filteredCategory: string) => {
    const filteredCountries = products
      .filter((products) =>
        filteredCategory === "All Products" || filteredCategory === ""
          ? products
          : products.name === filteredCategory
      )
      .filter(
        (products) =>
          products.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          products.brand?.toLowerCase().includes(searchValue.toLowerCase())
      );
    if (filteredCountries.length > 0) {
      setSearchedResult(filteredCountries);
    } else {
      setSearchedResult([]);
    }
    setCurrentPage(1); // reset current page to 1 after search/filter
  };

  const handleFilterByRegion = (filteredCategory: string) => {
    if (filteredCategory === "All Products") {
      setSearchedResult(products);
    } else {
      setSearchedResult(
        products.filter((category) => category.categories === filteredCategory)
      );
    }
    setCurrentPage(1); // reset current page to 1 after search/filter
  };

  // calculate indexes of countries to display based on current page and countries per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const totalPages = Math.ceil(searchedResult.length / productsPerPage);

  const currentCountries = searchedResult.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // create an array of page number from page 1 to totalPages
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Layout title={"Shop"}>
        <ShopPageStyles>
          <SearchFilter
            handleFilterByCategory={handleFilterByRegion}
            onChange={handleSearch}
          />
          <ProductSectionsCard product={currentCountries} />
          <PaginationContainer>
            {currentPage !== 1 && (
              <Image
                src="/assets/previous.png"
                alt="prev-button"
                width={20}
                height={20}
                onClick={handlePrev}
              />
            )}
            {pageNumbers.map((nPage) => {
              return (
                <PaginationBtn
                  active={nPage === currentPage}
                  key={nPage}
                  onClick={() => setCurrentPage(nPage)}
                >
                  {nPage}
                </PaginationBtn>
              );
            })}

            {currentPage !== totalPages && (
              <Image
                src="/assets/next.png"
                alt="prev-button"
                width={20}
                height={20}
                onClick={handleNext}
              />
            )}
          </PaginationContainer>
        </ShopPageStyles>
      </Layout>
    </>
  );
};

export default Shop;

export async function getStaticProps() {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
}