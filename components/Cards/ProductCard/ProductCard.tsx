import Image from "next/image";
import {
  ProductCardContainerStyle,
  ProductCardImageContainer,
  ProductPriceStyle,
  ProductTitleStyle,
} from "./productCard.styles";
import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import { ProductCardProps } from "@/interface/ProductCardProps";

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div>
      <ProductCardContainerStyle>
        <ProductCardImageContainer>
          <Image src={image} alt={`${title} image`} width={250} height={250} />
        </ProductCardImageContainer>
        <ProductTitleStyle>{title} </ProductTitleStyle>
        <ProductPriceStyle>
          <BoldText>NGN</BoldText> {price}
        </ProductPriceStyle>
        <ActionButtonStyle>Add to Cart</ActionButtonStyle>
      </ProductCardContainerStyle>
    </div>
  );
};

export default ProductCard;
