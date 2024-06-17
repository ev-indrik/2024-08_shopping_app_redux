import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const ununscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });
    return ununscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
