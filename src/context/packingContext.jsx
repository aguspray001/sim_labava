import React, { createContext } from "react";
import { useState } from "react";

const PackingContext = createContext(false);

const PackingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PackingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PackingContext.Provider>
  );
};

export { PackingProvider, PackingContext };
