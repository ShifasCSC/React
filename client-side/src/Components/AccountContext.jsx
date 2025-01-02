import React, { createContext, useState, useContext } from "react";

// Create the context
const AccountContext = createContext();

// Create a provider component
export const AccountProvider = ({ children }) => {
  const [accountType, setAccountType] = useState("seller||buyer"); // Default is buyer

  return (
    <AccountContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </AccountContext.Provider>
  );
};

// Custom hook to use account context
export const useAccount = () => {
  return useContext(AccountContext);
};
