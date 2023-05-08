import SubTotal from "@/components/Cards/Subtotal/SubTotal";
import {
  CartImageContainer,
  CartItems,
  CartItemsContainer,
  CartItemsData,
  CartMainContainer,
  EmptyCartStyle,
} from "@/styles/cart.styles";
import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const items = 2;

  return (
    <CartMainContainer>
      {items > 0 ? (
        <CartItemsContainer>
          <p>Your Shopping Cart</p>

          <div>
            <CartItems>
              <CartImageContainer>
                <Image
                  src="/assets/Logo-yello.png"
                  alt="product-image"
                  width={300}
                  height={300}
                />
              </CartImageContainer>
              <CartItemsData>
                <p> Nike Flower Top </p>
                <p>
                  <BoldText>NGN</BoldText> 5,000
                </p>
                <ActionButtonStyle>Remove From Cart</ActionButtonStyle>
              </CartItemsData>
            </CartItems>
            <CartItems>
              <CartImageContainer>
                <Image
                  src="/assets/Logo-yello.png"
                  alt="product-image"
                  width={300}
                  height={300}
                />
              </CartImageContainer>
              <CartItemsData>
                <p>Fendi Crop Top</p>
                <p>
                  <BoldText>NGN</BoldText> 9,999
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
