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
import { fetchProducts } from "@/fetcher/staticProp";
import { GetStaticPropsContext, NextPage } from "next";
import { useState, useEffect, FC } from "react";
import NoFooterLayout from "@/components/Layout/noFooterLayout";
import { getProductById } from "@/fetcher/staticProp";

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
  const id = (context.params?.id || "") as string;
  const data = getProductById(id);

  // console.log('data', data, id);

  return {
    props: {
      product: data,
    },
  };
};

const ProductId = ({ product }: { product: AllProducts }) => {
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
        <div>
          <DetailedProductImage>
            <Image
              src={product.images}
              alt={`${product.name} image`}
              width={500}
              height={600}
            />
          </DetailedProductImage>
          <DetailedProductDataStyle
            color={
              product.inventory.stock === 0 ? "var(--red)" : "var(--yellow)"
            }
          >
            <small>CATEGORY: {product.categories} </small>
            <p>{product.name} </p>
            <p>{product.description}</p>
            <p>
              {product.currency} {product.price.toLocaleString()}
            </p>
            <small>
              {" "}
              {product.inventory.stock === 0
                ? "OUT OF STOCK"
                : `STOCK: ${product.inventory?.stock}`}
            </small>
            <Count />
            <ActionButtonStyle
              onClick={handleCartClick}
              disabled={product.inventory?.stock === 0 ? true : false}
            >
              Add to Cart
            </ActionButtonStyle>
            <Toast message={"Added to Cart 😊"} isVisible={showToast} />
          </DetailedProductDataStyle>
        </div>
      </DetailedProductContainer>
    </NoFooterLayout>
  );
};

export default ProductId;
