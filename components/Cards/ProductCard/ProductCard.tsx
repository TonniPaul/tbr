import Image from "next/image";
import {
  AddToCartButtonStyle,
  ProductCardContainerStyle,
  ProductPriceStyle,
  ProductTitleStyle,
} from "./productCard.styles";

const ProductCard = () => {
  return (
    <div>
      <ProductCardContainerStyle>
        <Image
          src="/assets/logo-yello.png"
          alt="product-image"
          width={300}
          height={250}
        />
        <ProductTitleStyle> GUCCI BAG</ProductTitleStyle>
        <ProductPriceStyle>
          <span>NGN</span> 8500
        </ProductPriceStyle>
        <AddToCartButtonStyle> Add to Cart </AddToCartButtonStyle>
      </ProductCardContainerStyle>
    </div>
  );
};

export default ProductCard;
