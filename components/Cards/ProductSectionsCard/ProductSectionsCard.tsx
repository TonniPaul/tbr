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
              images={productData.images}
              name={productData.name}
              price={productData.price}
              currency={productData.currency}
              description={productData.description}
              categories={productData.categories}
              brand={productData.brand}
              inventory={{
                stock: productData.inventory.stock,
                availability: productData.inventory.availability,
              }}
            />
          );
        })}
      </div>
    </SectionCardStyle>
  );
};

export default ProductSectionsCard;
