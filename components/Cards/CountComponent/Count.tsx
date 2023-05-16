import { useState, useEffect } from "react";
import { CountButton } from "./count.style";
import { useStore } from "@/store";

const Count = ({ quantity, id }: { quantity: number; id: string }) => {
  const [unit, setUnit] = useState<number>(0);

  useEffect(() => {
    setUnit(quantity);
  }, [quantity]);

  const { updateQuantity } = useStore();

  const handleUnitAdd = () => {
    updateQuantity(id, "increase");
  };

  const handleUnitSubtract = () => {
    if (unit === 1) return;
    updateQuantity(id, "decrease");
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
