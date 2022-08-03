import { useState } from "react";
import Others from "./components/Others";
import Posts from "./components/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>{" "}
      {/* {count === 1 ? <Posts /> : null} */}
      {/* {count === 2 ? <Others /> : null} */}
      <Others />
    </div>
  );
}

export default App;
