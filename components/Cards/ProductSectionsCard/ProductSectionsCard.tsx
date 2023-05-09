import { SectionHeaderText } from "@/styles/globals.styles";
import ProductCard from "../ProductCard/ProductCard";
import { SectionCardStyle } from "./productSection.styles";

interface ProductSectionProps {}

const ProductSectionsCard = () => {
  return (
    <SectionCardStyle>
      <SectionHeaderText>NEW ARRIVAL</SectionHeaderText>
      <div>
        <ProductCard
          image={"/assets/product1.jpg"}
          title={"Stripe Top"}
          price={5000}
        />
        <ProductCard
          image={"/assets/product2.jpg"}
          title={"Fish Top"}
          price={7000}
        />
        <ProductCard
          image={"/assets/product3.jpg"}
          title={"Animal Skin Top"}
          price={4500}
        />
        <ProductCard
          image={"/assets/product4.jpg"}
          title={"Yellow Prints Top"}
          price={4800}
        />
      </div>
    </SectionCardStyle>
  );
};

export default ProductSectionsCard;
