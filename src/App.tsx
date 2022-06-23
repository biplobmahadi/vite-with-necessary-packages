import { useState } from "react";
import useSWR, { SWRConfig } from "swr";
import Page from "./Page";
import Page2 from "./Page2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      {count === 1 || count === 3 ? (
        <div>
          <Page />
          <Page2 />
        </div>
      ) : null}
      {/* <SWRConfig value={{ provider: () => new Map() }}>
      </SWRConfig> */}
    </div>
  );
}

export default App;
