import { SectionHeaderText } from "@/styles/globals.styles";
import ProductCard from "../ProductCard/ProductCard";
import { SectionCardStyle } from "./productSection.styles";
const ProductSectionsCard = () => {
  return (
    <SectionCardStyle>
      <SectionHeaderText>NEW ARRIVAL</SectionHeaderText>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </SectionCardStyle>
  );
};

export default ProductSectionsCard;
