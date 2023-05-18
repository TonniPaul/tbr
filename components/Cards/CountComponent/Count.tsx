import { useState, useEffect } from "react";
import { CountButton } from "./count.style";
import { useStore } from "@/store";

const Count = ({
  quantity,
  id,
  stock,
}: {
  quantity: number;
  id: string;
  stock: number;
}) => {
  const [unit, setUnit] = useState<number>(0);

  useEffect(() => {
    setUnit(quantity);
  }, [quantity]);

  const { updateQuantity } = useStore();

  const handleUnitAdd = () => {
    if (unit >= stock) return;
    setUnit((prev) => prev + 1);
    updateQuantity(id, "increase");
  };

  const handleUnitSubtract = () => {
    if (unit === 1) return;
    updateQuantity(id, "decrease");
    setUnit((prev) => prev - 1);
  };

  return (
    <CountButton>
      <button onClick={handleUnitSubtract} disabled={unit <= 1 ? true : false}>
        -
      </button>
      <span> {unit} </span>
      <button onClick={handleUnitAdd} disabled={unit >= stock ? true : false}>
        +
      </button>
    </CountButton>
  );
};

export default Count;
