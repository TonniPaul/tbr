import { SectionHeaderText } from "@/styles/globals.styles";
import ProductCard from "../ProductCard/ProductCard";
import { SectionCardStyle } from "./productSection.styles";
import { ProductSectionProps } from "@/interface/ProductSectionProps";

const ProductSectionsCard = ({ title, product }: ProductSectionProps) => {
  return (
    <SectionCardStyle>
      {title && <SectionHeaderText> {title}</SectionHeaderText>}

      <div>
        {product.map((productData) => {
          return (
            <ProductCard
              key={productData.id}
              id={productData.id}
              image={productData.images}
              title={productData.name}
              price={productData.price}
            />
          );
        })}
      </div>
    </SectionCardStyle>
  );
};

export default ProductSectionsCard;
