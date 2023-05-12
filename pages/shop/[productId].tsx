import Count from "@/components/Cards/CountComponent/Count";
import {
  DetailedProductContainer,
  DetailedProductDataStyle,
  DetailedProductImage,
  GoBackButton,
} from "@/components/Cards/DetailedProductCard/detailedProduct.styles";
import { ActionButtonStyle } from "@/styles/globals.styles";
import Image from "next/image";
import { useRouter } from "next/router";

interface DetailedPageProp {
  id: string;
  images: string;
  description: string;
  price: number;
  name: string;
  brand: string;
  stock: number;
  categories: string;
  currency: string;
}

const ProductId = ({
  id,
  images,
  description,
  price,
  name,
  brand,
  stock,
  categories,
  currency,
}: DetailedPageProp) => {
  const goBack = useRouter();
  const router = useRouter();
  // const [id] =router.query

  const handleGoBack = () => {
    goBack.back();
  };

  return (
    <DetailedProductContainer>
      <GoBackButton onClick={handleGoBack}>
        <span>&larr; </span> Go Back
      </GoBackButton>
      <div>
        <DetailedProductImage>
          <Image src={images} alt={`${name} image`} width={500} height={600} />
        </DetailedProductImage>
        <DetailedProductDataStyle>
          <p>{name} </p>
          <p>{description}</p>
          <p>
            {currency} {price}
          </p>
          <Count />
          <ActionButtonStyle>Add to Cart</ActionButtonStyle>
        </DetailedProductDataStyle>
      </div>
    </DetailedProductContainer>
  );
};

export default ProductId;
