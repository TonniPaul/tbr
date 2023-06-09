import Count from "@/components/Cards/CountComponent/Count";
import {
  DetailedProductContainer,
  DetailedProductDataStyle,
  DetailedProductImage,
  GoBackButton,
} from "@/components/Cards/DetailedProductCard/detailedProduct.styles";
import Toast from "@/components/Toast/Toast";
import { AllProducts } from "@/interface/AllProduct";
import { ActionButtonStyle } from "@/styles/globals.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchProductId, fetchProducts } from "@/fetcher/fetcher";
import { GetStaticPropsContext } from "next";
import { useState, useEffect } from "react";
import NoFooterLayout from "@/components/Layout/noFooterLayout";
import { useStore } from "@/store";
import Loader from "@/components/Loader/Loader";

const ProductId = ({ product }: { product: AllProducts }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const { addToCart } = useStore();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showToast]);

  if (router.isFallback) {
    return <Loader />;
  }

  const handleGoBack = () => {
    router.back();
  };

  const handleCartClick = () => {
    addToCart({ ...product, quantity: 0 });
    setShowToast(true);
  };

  return (
    <NoFooterLayout title={product.name}>
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
            <Count
              quantity={1}
              stock={product.inventory.stock}
              id={product.id}
            />
            <ActionButtonStyle
              onClick={handleCartClick}
              disabled={product.inventory?.stock === 0 ? true : false}
            >
              {`${
                product.inventory.stock !== 0 ? "Add to Cart" : "Out of Stock"
              }`}
            </ActionButtonStyle>
            <Toast message={"Added to Cart 😊"} isVisible={showToast} />
          </DetailedProductDataStyle>
        </div>
      </DetailedProductContainer>
    </NoFooterLayout>
  );
};

export default ProductId;

export const getStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product: AllProducts) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const productId = params?.id as string;
  const product = (await fetchProductId(productId)) || null;

  if (!product?.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};