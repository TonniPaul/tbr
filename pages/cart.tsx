import CartItemsCard from "@/components/Cards/CartItemsCard/CartItemsCard";
import Count from "@/components/Cards/CountComponent/Count";
import SubTotal from "@/components/Cards/Subtotal/SubTotal";
import NoFooterLayout from "@/components/Layout/noFooterLayout";
import Toast from "@/components/Toast/Toast";
import { useStore } from "@/store";
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
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const items = 2;

  const { cart, removeFromCart } = useStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleted(false);
    }, 4000);

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
              <p>Your Shopping Cart</p>

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
