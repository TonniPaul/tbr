import CartItemsCard from "@/components/Cards/CartItemsCard/CartItemsCard";
import Count from "@/components/Cards/CountComponent/Count";
import SubTotal from "@/components/Cards/Subtotal/SubTotal";
import Toast from "@/components/Toast/Toast";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleted(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isDeleted]);

  const handleConfirmClick = () => {
    setIsDeleted(true);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="The best thrift clothing and accessories are handpicked especially for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.jpg" />
        <title>Cart Page</title>
      </Head>
      <CartMainContainer>
        {items > 0 ? (
          <CartItemsContainer>
            <p>Your Shopping Cart</p>

            <div>
              <CartItemsCard onConfirmClick={handleConfirmClick} />
              <CartItemsCard onConfirmClick={handleConfirmClick} />
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
        <SubTotal />
      </CartMainContainer>
    </>
  );
};

export default CartPage;
