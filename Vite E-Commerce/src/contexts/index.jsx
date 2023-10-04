import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoopingCartProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
