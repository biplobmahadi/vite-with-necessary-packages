import React from "react";
import { useCounterContext } from "../contexts/counter/hook";

export default function OutsideContext() {
  const { count, increment, decrement, reset } = useCounterContext();
  return (
    <div>
      <p>OutsideContext - {count}</p>
    </div>
  );
}
