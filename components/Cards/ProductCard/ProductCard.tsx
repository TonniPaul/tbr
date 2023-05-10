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

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  const productRoute = useRouter();

  const handleProductRoute = () => {
    productRoute.push("/DetailedProductCard");
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
        />
      </ProductCardImageContainer>
      <ProductTitleStyle onClick={handleProductRoute}>
        {title}
      </ProductTitleStyle>
      <ProductPriceStyle onClick={handleProductRoute}>
        <BoldText>NGN</BoldText> {price.toLocaleString()}
      </ProductPriceStyle>
      <ActionButtonStyle onClick={() => alert("I was clicked")}>
        Add to Cart
      </ActionButtonStyle>
    </ProductCardContainerStyle>
  );
};

export default ProductCard;
