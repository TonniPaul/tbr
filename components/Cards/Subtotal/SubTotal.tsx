import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import { GrandTotal, SubTotalContainer } from "./subTotal.styles";
import { useEffect, useState } from "react";
import { useStore } from "@/store";

const SubTotal = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const { cart } = useStore();

  useEffect(() => {
    const calculateTotal = () => {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };

    const newTotal = calculateTotal();
    const newDiscount = (newTotal / 100) * 5;
    const newGrandTotal = newTotal - newDiscount;

    setCartCount(cart.length);
    setTotal(newTotal);
    setDiscount(newDiscount);
    setGrandTotal(newGrandTotal);
  }, [cart]);

  return (
    <SubTotalContainer>
      <p>
        <span>
          Subtotal
          <span>
            {" "}
            (<BoldText>{cartCount}</BoldText> {cartCount > 1 ? "items" : "item"}{" "}
            ):
          </span>
        </span>
        <span>NGN {total.toLocaleString()}</span>
      </p>
      <p>
        <span> Discount (5% off):</span>
        <span>NGN {discount.toLocaleString()}</span>
      </p>

      <GrandTotal>
        <span> Grand Total:</span>
        <span>NGN {grandTotal.toLocaleString()}</span>
      </GrandTotal>
      <ActionButtonStyle>Proceed to Checkout</ActionButtonStyle>
    </SubTotalContainer>
  );
};

export default SubTotal;
