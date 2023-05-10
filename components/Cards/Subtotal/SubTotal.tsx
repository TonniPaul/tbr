import { ActionButtonStyle, BoldText } from "@/styles/globals.styles";
import { GrandTotal, SubTotalContainer } from "./subTotal.styles";
import { useState } from "react";

const SubTotal = () => {
  const [itemCount, swtItemCOunt] = useState<number>(2);
  const amount = 4800 + 4500;
  const discount = (amount / 100) * 5;

  return (
    <SubTotalContainer>
      <p>
        <span>
          Subtotal
          <span>
            {" "}
            (<BoldText>{itemCount}</BoldText> {itemCount > 1 ? "items" : "item"}{" "}
            ):
          </span>
        </span>
        <span>NGN {amount.toLocaleString()}</span>
      </p>
      <p>
        <span> Discount (5% off):</span>
        <span>NGN {discount.toLocaleString()}</span>
      </p>

      <GrandTotal>
        <span> Grand Total:</span>
        <span>
          NGN
          {(amount - discount).toLocaleString()}{" "}
        </span>
      </GrandTotal>
      <ActionButtonStyle>Proceed to Checkout</ActionButtonStyle>
    </SubTotalContainer>
  );
};

export default SubTotal;
