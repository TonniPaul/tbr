import Count from "@/components/Cards/CountComponent/Count";
import {
  DetailedProductContainer,
  DetailedProductDataStyle,
  DetailedProductImage,
  PriceStyle,
} from "@/components/Cards/DetailedProductCard/detailedProduct.styles";
import { ActionButtonStyle } from "@/styles/globals.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const DetailedProductCard = () => {
  const [unit, setUnits] = useState<number>(0);
  const goBack = useRouter();

  const handleGoBAck = () => {
    goBack.back();
  };
  const handleUnitAdd = () => {
    setUnits((prev) => prev + 1);
  };

  const handleUnitSubtract = () => {
    if (unit === 0) return;
    setUnits((prev) => prev - 1);
  };
  return (
    <DetailedProductContainer>
      <button onClick={handleGoBAck}>
        <span>&larr; </span> Go Back
      </button>
      <div>
        <DetailedProductImage>
          <Image
            src="/assets/product1.jpg"
            alt="product-image"
            width={500}
            height={600}
          />
        </DetailedProductImage>
        <DetailedProductDataStyle>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p>NGN 5999 </p>
          <Count />
          <ActionButtonStyle>Add to Cart</ActionButtonStyle>
        </DetailedProductDataStyle>
      </div>
    </DetailedProductContainer>
  );
};

export default DetailedProductCard;
