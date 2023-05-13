import Count from "@/components/Cards/CountComponent/Count";
import {
  DetailedProductContainer,
  DetailedProductDataStyle,
  DetailedProductImage,
  GoBackButton,
} from "@/components/Cards/DetailedProductCard/detailedProduct.styles";
import Toast from "@/components/Toast/Toast";
import { AllProducts, MyProductProps } from "@/interface/AllProduct";
import { ActionButtonStyle } from "@/styles/globals.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchProducts } from "../api/staticProp";
import { GetStaticPropsContext } from "next";
import { useState, useEffect } from "react";
import NoFooterLayout from "@/components/Layout/noFooterLayout";

export const getStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product: AllProducts) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const res = await fetch(`https://tbr.tonnipaul.com/api/products/`);

  const data = await res.json();
  console.log(data, id);

  return {
    props: {
      products: data,
    },
  };
};

const ProductId = ({ products }: MyProductProps) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const goBack = useRouter();

  const handleGoBack = () => {
    goBack.back();
  };

  const handleCartClick = () => {
    setShowToast(true);
  };

  return (
    <NoFooterLayout>
      <DetailedProductContainer>
        <GoBackButton onClick={handleGoBack}>
          <span>&larr; </span> Go Back
        </GoBackButton>
        {
          products.map((products) => {
            return (
              <div key={products.id}>
                <DetailedProductImage>
                  <Image
                    src={products.images}
                    alt={`${products.name} image`}
                    width={500}
                    height={600}
                  />
                </DetailedProductImage>
                <DetailedProductDataStyle>
                  <small>CATEGORY: {products.categories} </small>
                  <p>{products.name} </p>
                  <p>{products.description}</p>
                  <p>
                    {products.currency} {products.price.toLocaleString()}
                  </p>
                  <small>
                    {" "}
                    {products.inventory.stock === 0
                      ? "OUT OF STOCK"
                      : `STOCK:${products.inventory.stock}`}{" "}
                  </small>
                  <Count />
                  <ActionButtonStyle
                    onClick={handleCartClick}
                    disabled={products.inventory.stock === 0 ? true : false}
                  >
                    Add to Cart
                  </ActionButtonStyle>
                  <Toast message={"Added to Cart 😊"} isVisible={showToast} />
                </DetailedProductDataStyle>
              </div>
            );
          })[0]
        }
      </DetailedProductContainer>
    </NoFooterLayout>
  );
};

export default ProductId;
