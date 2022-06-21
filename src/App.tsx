import { useState } from "react";
import { StorageAuth } from "./localStorage";

function App() {
  const [count, setCount] = useState(0);
  const [a, seta] = useState<string>();
  const [r, setr] = useState<string>();

  const handleAdd = () => {
    StorageAuth.accessToken = "kire";
    StorageAuth.refreshToken = "beda";
  };
  const handleClear = () => {
    StorageAuth.clearAuth();
  };
  const handleShow = () => {
    seta(StorageAuth.accessToken ?? undefined);
    setr(StorageAuth.refreshToken ?? undefined);
  };
  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleClear}>remove</button>
      <button onClick={handleShow}>show</button>
      <p>
        Access: {a}
        Refresh: {r}
      </p>
    </div>
  );
}

export default App;
