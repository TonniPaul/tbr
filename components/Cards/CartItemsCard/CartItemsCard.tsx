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
import { useStore } from "@/store";
import Link from "next/link";

interface CartCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
  stock: number;
  onConfirmClick: () => void;
}

const CartItemsCard = ({
  id,
  image,
  name,
  price,
  quantity,
  onConfirmClick,
  currency,
  stock,
}: CartCardProps) => {
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const { removeFromCart } = useStore();

  const handleRemoveClick = () => {
    setIsRemoving(true);
  };

  const handleCancelClick = () => {
    setIsRemoving(false);
  };

  const handleConfirmClick = () => {
    setIsRemoving(false);
    removeFromCart(id);
    onConfirmClick();
  };
  return (
    <CartItems>
      <CartImageContainer>
        <Link href={`/shop/${id}`}>
          <Image src={image} alt={`${name} image`} width={300} height={300} />
        </Link>
      </CartImageContainer>
      <CartItemsData>
        <p> {name} </p>
        <p>
          <BoldText>
            {currency} {price.toLocaleString()}
          </BoldText>
        </p>
        <small>Quantity: {quantity} </small>
        <Count quantity={quantity} id={id} stock={stock} />

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
