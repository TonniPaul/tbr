import { ActionButtonStyle, CurrencyStyle } from "@/styles/globals.styles";
import { SubTotalContainer } from "./subTotal.styles";
import { useState } from "react";

const SubTotal = () => {
  const [itemCount, swtItemCOunt] = useState<number>(3);

  return (
    <SubTotalContainer>
      <p>
        Subtotal{" "}
        <span>
          ({itemCount} {itemCount > 1 ? "items" : "item"} )
        </span>
        : <CurrencyStyle>NGN </CurrencyStyle> 5000
      </p>
      <p></p>
      <ActionButtonStyle>Proceed to Checkout</ActionButtonStyle>
    </SubTotalContainer>
  );
};

export default SubTotal;
