import { useState } from "react";
import { PriceStyle } from "../DetailedProductCard/detailedProduct.styles";
import { CountButton } from "./count.style";

const Count = () => {
  const [unit, setUnits] = useState<number>(0);

  const handleUnitAdd = () => {
    setUnits((prev) => prev + 1);
  };

  const handleUnitSubtract = () => {
    if (unit === 0) return;
    setUnits((prev) => prev - 1);
  };
  return (
    <CountButton>
      <button onClick={handleUnitSubtract} disabled={unit === 0 ? true : false}>
        -
      </button>
      <span> {unit} </span>
      <button onClick={handleUnitAdd}>+</button>
    </CountButton>
  );
};

export default Count;
