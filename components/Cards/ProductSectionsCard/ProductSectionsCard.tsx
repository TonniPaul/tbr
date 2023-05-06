import ProductCard from "../ProductCard/ProductCard";
import { SectionCardStyle } from "./productSection.styles";

const ProductSectionsCard = () => {
  return (
    <SectionCardStyle>
      <h3>NEW ARRIVAL</h3>
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
