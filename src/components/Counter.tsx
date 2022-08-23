import React from "react";
import { useCounterContext } from "../contexts/counter/hook";

export default function Counter() {
  const { count, increment, decrement, reset, msg, setMsg } =
    useCounterContext();
  return (
    <div>
      <div>Counter</div>
      <div>{count}</div>
      <div>{msg}</div>
      <button onClick={() => increment(1)}>increment</button>
      <button onClick={() => decrement(1)}>decrement</button>
      <button onClick={() => increment(5)}>increment by 5</button>
      <button onClick={() => decrement(10)}>decrement by 10</button>
      <button onClick={() => setMsg("hahaha")}>set msg</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
