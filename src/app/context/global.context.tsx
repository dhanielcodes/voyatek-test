"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
type ContextType = {
  keyword: string | undefined;
  setKeyword: Dispatch<SetStateAction<string | undefined>>;
};
const MainContext = createContext<ContextType | null>(null);
interface ContextTypeInterface {
  children: React.ReactNode;
}

export const MainProvider = ({ children }: ContextTypeInterface) => {
  const [keyword, setKeyword] = useState<any>(null);

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
