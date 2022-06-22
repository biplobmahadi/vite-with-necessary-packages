import { useState } from "react";
import { IUser } from "./interfaces/user";
import AppModal from "./modals/appModals/AppModal";

function App() {
  const [count, setCount] = useState(0);

  // Modal need this data
  const users: IUser[] = [
    {
      name: "pial",
      age: 25,
    },
    { name: "voss", age: 68 },
  ];

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <AppModal users={users} />
    </div>
  );
}

export default App;
