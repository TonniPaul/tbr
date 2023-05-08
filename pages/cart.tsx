import SubTotal from "@/components/Cards/Subtotal/SubTotal";
import {
  CartImageContainer,
  CartItems,
  CartItemsContainer,
  CartItemsData,
  CartMainContainer,
} from "@/styles/cart.styles";
import { ActionButtonStyle, CurrencyStyle } from "@/styles/globals.styles";
import Image from "next/image";

const CartPage = () => {
  return (
    <CartMainContainer>
      <CartItemsContainer>
        <p>Your Shopping Cart</p>

        <div>
          <CartItems>
            <CartImageContainer>
              <Image
                src="/assets/logo-yello.png"
                alt="product-image"
                width={300}
                height={300}
              />
            </CartImageContainer>
            <CartItemsData>
              <p>Ankara Top</p>
              <p>
                <CurrencyStyle>NGN</CurrencyStyle> 5,000
              </p>
              <ActionButtonStyle>Remove From Cart</ActionButtonStyle>
            </CartItemsData>
          </CartItems>
        </div>
      </CartItemsContainer>

      <SubTotal />
    </CartMainContainer>
  );
};

export default CartPage;
