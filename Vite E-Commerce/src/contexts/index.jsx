import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoopingCartProvider({ children }) {
  // ShoppingCart - Counter
  const [count, setCount] = useState(0);

  // Check product detail state
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  //Opening and closing product detail
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
