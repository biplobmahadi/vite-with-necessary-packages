import { useState } from "react";

export default function useAuth() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  return { isLoggedIn, setLoggedIn };
}
