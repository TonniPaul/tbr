import Image from "next/image";
import {
  ProductCardContainerStyle,
  ProductCardImageContainer,
  ProductPriceStyle,
  ProductTitleStyle,
} from "./productCard.styles";
import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import { ProductCardProps } from "@/interface/ProductCardProps";
import { useRouter } from "next/router";
import Toast from "@/components/Toast/Toast";
import { useEffect, useState } from "react";

const ProductCard = ({
  image,
  title,
  price,
  id,
  currency,
}: ProductCardProps) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const productRoute = useRouter();

  const productId = id;

  const handleProductRoute = () => {
    productRoute.push(`/shop/${productId}`);
  };

  const handleAddToCart = () => {
    setShowToast(true);
  };

  return (
    <ProductCardContainerStyle>
      <ProductCardImageContainer>
        <Image
          src={image}
          alt={`${title} image`}
          width={250}
          height={250}
          onClick={handleProductRoute}
          // priority
        />
      </ProductCardImageContainer>
      <ProductTitleStyle onClick={handleProductRoute}>
        {title}
      </ProductTitleStyle>
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
        status="Success"
        message="Added To cart 😊"
        isVisible={showToast}
      />
    </ProductCardContainerStyle>
  );
};

export default ProductCard;
