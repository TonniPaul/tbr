import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ProductCardContainerStyle,
  ProductCardImageContainer,
  ProductPriceStyle,
  ProductTitleStyle,
} from "./productCard.styles";
import { ActionButtonStyle } from "@/styles/globals.styles";
import { ProductCardProps } from "@/interface/ProductCardProps";
import Toast from "@/components/Toast/Toast";
import { useEffect } from "react";

const ProductCard = ({
  image,
  title,
  price,
  id,
  currency,
  stock,
}: ProductCardProps) => {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const handleProductRoute = () => {
    router.push(`/shop/${id}`);
  };

  const handleAddToCart = () => {
    setShowToast(true);
  };

  return (
    <ProductCardContainerStyle>
      <ProductCardImageContainer href={`shop/${id}`}>
        <Image
          src={image}
          alt={`${title} image`}
          width={250}
          height={250}
          onClick={handleProductRoute}
        />
      </ProductCardImageContainer>
      <ProductTitleStyle href={`shop/${id}`}>{title}</ProductTitleStyle>
      <ProductPriceStyle onClick={handleProductRoute}>
        {currency} {price.toLocaleString()}
      </ProductPriceStyle>
      <ActionButtonStyle onClick={handleAddToCart}>
        <Image
          src="/assets/cart-icon.svg"
          alt="cartIcon"
          width={20}
          height={20}
        />
        <span>Add to Cart</span>
      </ActionButtonStyle>
      <Toast
        status={stock === 0 ? "Failed" : "Success"}
        message={stock === 0 ? "Out of Stock 😞" : "Added to Cart 😊"}
        isVisible={showToast}
      />
    </ProductCardContainerStyle>
  );
};

export default ProductCard;
