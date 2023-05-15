import {
  CartImageContainer,
  CartItems,
  CartItemsData,
  ConfirmRemoveContainer,
} from "@/styles/cart.styles";
import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Count from "../CountComponent/Count";

interface CartCardProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onConfirmClick: () => void;
}

const CartItemsCard = ({
  image,
  name,
  price,
  quantity,
  onConfirmClick,
}: CartCardProps) => {
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  const handleRemoveClick = () => {
    setIsRemoving(true);
  };

  const handleCancelClick = () => {
    setIsRemoving(false);
  };

  const handleConfirmClick = () => {
    setIsRemoving(false);
    onConfirmClick();
  };
  return (
    <CartItems>
      <CartImageContainer>
        <Image
          src="/assets/product4.jpg"
          alt="product-image"
          width={300}
          height={300}
        />
      </CartImageContainer>
      <CartItemsData>
        <p> Yellow Prints Top </p>
        <p>
          <BoldText>NGN</BoldText> 4,800
        </p>
        <Count />

        {!isRemoving && (
          <ActionButtonStyle onClick={handleRemoveClick}>
            Remove From Cart
          </ActionButtonStyle>
        )}
        {isRemoving && (
          <ConfirmRemoveContainer>
            <ActionButtonStyle onClick={handleCancelClick}>
              Cancel
            </ActionButtonStyle>
            <ActionButtonStyle
              color="var(--white)"
              onClick={handleConfirmClick}
              hoverColor="var(--yellow)"
            >
              Confirm
            </ActionButtonStyle>
          </ConfirmRemoveContainer>
        )}
      </CartItemsData>
    </CartItems>
  );
};

export default CartItemsCard;
