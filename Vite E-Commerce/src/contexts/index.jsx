import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoopingCartProvider({ children }) {
  // Product detail states manager
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // checkout side menu state manager
  const [isCheckoutSideMenuOpen, setCheckOutMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => {
    setCheckOutMenuOpen(true);
  };
  const closeCheckOutSideMenu = () => {
    setCheckOutMenuOpen(false);
  };

  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
