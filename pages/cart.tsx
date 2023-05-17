import CartItemsCard from "@/components/Cards/CartItemsCard/CartItemsCard";
import Count from "@/components/Cards/CountComponent/Count";
import SubTotal from "@/components/Cards/Subtotal/SubTotal";
import NoFooterLayout from "@/components/Layout/noFooterLayout";
import Toast from "@/components/Toast/Toast";
import { useStore } from "@/store";
import {
  CartItemsContainer,
  CartMainContainer,
  ClearCartContainerStyle,
  ConfirmRemoveContainer,
  EmptyCartStyle,
} from "@/styles/cart.styles";
import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [clearCart, setClearCart] = useState<boolean>(false);
  const router = useRouter();
  const { cart, removeFromCart, reset } = useStore();

  //Function to hide toast after 3 seconds of display
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleted(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDeleted]);

  const handleConfirmClick = () => {
    removeFromCart;
    setIsDeleted(true);
  };

  return (
    <>
      <NoFooterLayout>
        <CartMainContainer>
          {cart.length > 0 ? (
            <CartItemsContainer>
              <div>
                <p>Your Shopping Cart</p>
                <ActionButtonStyle onClick={() => router.push("/shop")}>
                  Continue Shopping
                </ActionButtonStyle>
              </div>
              <div>
                {cart.map((cartItems) => {
                  return (
                    <CartItemsCard
                      key={cartItems.id}
                      image={cartItems.images}
                      price={cartItems.price}
                      quantity={cartItems.quantity}
                      name={cartItems.name}
                      onConfirmClick={handleConfirmClick}
                      currency={cartItems.currency}
                      id={cartItems.id}
                    />
                  );
                })}
              </div>
              <Toast
                message={"Removed From Cart 😔"}
                status="Success"
                isVisible={isDeleted}
              />
              {cart.length > 1 && (
                <ClearCartContainerStyle>
                  {!clearCart && (
                    <ActionButtonStyle
                      color={"var(--white)"}
                      onClick={() => setClearCart(true)}
                    >
                      Clear Cart
                    </ActionButtonStyle>
                  )}
                  {clearCart && (
                    <ConfirmRemoveContainer>
                      <ActionButtonStyle
                        onClick={() => setClearCart((prev) => !prev)}
                      >
                        Cancel
                      </ActionButtonStyle>
                      <ActionButtonStyle
                        color={"var(--white)"}
                        onClick={() => reset()}
                      >
                        Confirm
                      </ActionButtonStyle>
                    </ConfirmRemoveContainer>
                  )}
                </ClearCartContainerStyle>
              )}
            </CartItemsContainer>
          ) : (
            <EmptyCartStyle>
              <p>Your cart is empty!!</p>
              <Link href="/shop">
                <ActionButtonStyle>Continue Shopping</ActionButtonStyle>
              </Link>
            </EmptyCartStyle>
          )}
          {cart.length !== 0 && <SubTotal />}{" "}
        </CartMainContainer>
      </NoFooterLayout>
    </>
  );
};

export default CartPage;
