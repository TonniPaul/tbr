import Count from "@/components/Cards/CountComponent/Count";
import {
  DetailedProductContainer,
  DetailedProductDataStyle,
  DetailedProductImage,
  GoBackButton,
} from "@/components/Cards/DetailedProductCard/detailedProduct.styles";
import { MyProductProps } from "@/interface/AllProduct";
import { ActionButtonStyle } from "@/styles/globals.styles";
import Image from "next/image";
import { useRouter } from "next/router";

// interface DetailedPageProp {
//   id: string;
//   images: string;
//   description: string;
//   price: number;
//   name: string;
//   brand: string;
//   stock: number;
//   categories: string;
//   currency: string;
// }

const ProductId = ({ products }: MyProductProps) => {
  const goBack = useRouter();

  const handleGoBack = () => {
    goBack.back();
  };

  return (
    <DetailedProductContainer>
      <GoBackButton onClick={handleGoBack}>
        <span>&larr; </span> Go Back
      </GoBackButton>
      {products.map((data) => {
        return (
          <div key={data.id}>
            <DetailedProductImage>
              <Image
                src={data.images}
                alt={`${data.name} image`}
                width={500}
                height={600}
              />
            </DetailedProductImage>
            <DetailedProductDataStyle>
              <p>{data.name} </p>
              <p>{data.description}</p>
              <p>
                {data.currency} {data.price}
              </p>
              <Count />
              <ActionButtonStyle>Add to Cart</ActionButtonStyle>
            </DetailedProductDataStyle>
          </div>
        );
      })}
    </DetailedProductContainer>
  );
};

export default ProductId;
