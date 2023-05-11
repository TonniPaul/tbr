import { useState } from "react";
import { PriceStyle } from "../DetailedProductCard/detailedProduct.styles";
import { CountButton } from "./count.style";

const Count = () => {
  const [unit, setUnits] = useState<number>(1);

  const handleUnitAdd = () => {
    setUnits((prev) => prev + 1);
  };

  const handleUnitSubtract = () => {
    if (unit === 1) return;
    setUnits((prev) => prev - 1);
  };
  return (
    <CountButton>
      <button onClick={handleUnitSubtract} disabled={unit === 1 ? true : false}>
        -
      </button>
      <span> {unit} </span>
      <button onClick={handleUnitAdd}>+</button>
    </CountButton>
  );
};

export default Count;
