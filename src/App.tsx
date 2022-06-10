import { useState } from "react";
import Posts from "./components/Posts";
import Practice from "./components/Practice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>{" "}
      {count === 1 ? <Posts /> : null}
      {/* <Posts />
      <RenderHoi /> */}
    </div>
  );
}

export default App;
