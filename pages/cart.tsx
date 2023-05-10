import SubTotal from "@/components/Cards/Subtotal/SubTotal";
import {
  CartImageContainer,
  CartItems,
  CartItemsContainer,
  CartItemsData,
  CartMainContainer,
  ConfirmRemoveContainer,
  EmptyCartStyle,
} from "@/styles/cart.styles";
import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const items = 2;

  const handleRemoveClick = () => {
    setIsRemoving(true);
  };

  const handleCancelClick = () => {
    setIsRemoving(false);
  };

  const handleConfirmClick = () => {
    setIsRemoving(false);
  };

  return (
    <CartMainContainer>
      {items > 0 ? (
        <CartItemsContainer>
          <p>Your Shopping Cart</p>

          <div>
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

                {!isRemoving && (
                  <ActionButtonStyle onClick={handleRemoveClick}>
                    Remove From Cart
                  </ActionButtonStyle>
                )}
                {isRemoving && (
                  <ConfirmRemoveContainer>
                    <ActionButtonStyle
                      color="var(--green)"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </ActionButtonStyle>
                    <ActionButtonStyle
                      color="var(--red)"
                      onClick={handleConfirmClick}
                    >
                      Confirm
                    </ActionButtonStyle>
                  </ConfirmRemoveContainer>
                )}
              </CartItemsData>
            </CartItems>
            <CartItems>
              <CartImageContainer>
                <Image
                  src="/assets/product3.jpg"
                  alt="product-image"
                  width={300}
                  height={300}
                />
              </CartImageContainer>
              <CartItemsData>
                <p>Animal Skin Top</p>
                <p>
                  <BoldText>NGN</BoldText> 4500
                </p>
                <ActionButtonStyle>Remove From Cart</ActionButtonStyle>
              </CartItemsData>
            </CartItems>
          </div>
        </CartItemsContainer>
      ) : (
        <EmptyCartStyle>
          <p>Your cart is empty!!</p>
          <Link href="/shop">
            <ActionButtonStyle>Continue Shopping</ActionButtonStyle>
          </Link>
        </EmptyCartStyle>
      )}
      <SubTotal />
    </CartMainContainer>
  );
};

export default CartPage;
