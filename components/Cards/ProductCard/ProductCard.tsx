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
import { useStore } from "@/store";
import { AllProducts } from "@/interface/AllProduct";

const ProductCard = (product: AllProducts) => {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const { addToCart } = useStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const handleProductRoute = () => {
    router.push(`/shop/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 0 });
    setShowToast(true);
  };

  return (
    <ProductCardContainerStyle>
      <ProductCardImageContainer href={`shop/${product.id}`}>
        <Image
          src={product.images}
          alt={`${product.name} image`}
          width={250}
          height={250}
          onClick={handleProductRoute}
        />
      </ProductCardImageContainer>
      <ProductTitleStyle href={`shop/${product.id}`}>
        {product.name}
      </ProductTitleStyle>
      <ProductPriceStyle onClick={handleProductRoute}>
        {product.currency} {product.price.toLocaleString()}
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
        status={product.inventory.stock === 0 ? "Failed" : "Success"}
        message={
          product.inventory.stock === 0 ? "Out of Stock 😞" : "Added to Cart 😊"
        }
        isVisible={showToast}
      />
    </ProductCardContainerStyle>
  );
};

export default ProductCard;
