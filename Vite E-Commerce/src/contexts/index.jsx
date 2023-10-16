import { createContext, useEffect, useState } from "react";
import { totalPrice } from "../components/Utils";

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
  const [totalPriceOfProducts, setTotalPriceOfProducts] = useState(0);

  const updateTotalPriceOfProducts = () => {
    setTotalPriceOfProducts(totalPrice(cartProducts));
  };

  useEffect(() => {
    console.log(cartProducts);
    updateTotalPriceOfProducts();
  }, [cartProducts]);

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
        totalPriceOfProducts,
        setTotalPriceOfProducts,
        updateTotalPriceOfProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
