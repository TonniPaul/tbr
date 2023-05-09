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
                <ActionButtonStyle>Remove From Cart</ActionButtonStyle>
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
