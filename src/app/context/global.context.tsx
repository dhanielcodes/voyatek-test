"use client";
import { createContext, useState } from "react";

const MainContext = createContext(null);
interface ContextTypeInterface {
  children: React.ReactNode;
}

export const MainProvider = ({ children }: ContextTypeInterface) => {
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  return (
    <MainContext.Provider
      value={{
        setKeyword,
        keyword,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
