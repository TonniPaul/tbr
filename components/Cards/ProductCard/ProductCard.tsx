import Image from "next/image";
import {
  ProductCardContainerStyle,
  ProductCardImageContainer,
  ProductPriceStyle,
  ProductTitleStyle,
} from "./productCard.styles";
import productImage from "../../../public/assets/Logo-yello.png";
import { ActionButtonStyle, CurrencyStyle } from "@/styles/globals.styles";

const ProductCard = () => {
  return (
    <div>
      <ProductCardContainerStyle>
        <ProductCardImageContainer>
          <Image
            src={productImage}
            alt="product-image"
            width={250}
            height={250}
          />
        </ProductCardImageContainer>
        <ProductTitleStyle> GUCCI BAG</ProductTitleStyle>
        <ProductPriceStyle>
          <CurrencyStyle>NGN</CurrencyStyle>
          8500
        </ProductPriceStyle>
        <ActionButtonStyle>Add to Cart</ActionButtonStyle>
      </ProductCardContainerStyle>
    </div>
  );
};

export default ProductCard;
