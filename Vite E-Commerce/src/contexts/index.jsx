import { createContext, useEffect, useState } from "react";
import { totalPrice } from "../components/Utils";

const ShoppingCartContext = createContext();

function ShoopingCartProvider({ children }) {
  // ------------------------Product Details states and functions --------------------------------
  // Product detail states manager
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // ------------------------CheckoutSideMenu states and functions--------------------------------
  // checkout side menu state manager
  const [isCheckoutSideMenuOpen, setCheckOutMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => {
    setCheckOutMenuOpen(true);
  };
  const closeCheckOutSideMenu = () => {
    setCheckOutMenuOpen(false);
  };

  // ------------------------ProductDetail states and functions-----------------------------------
  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});

  // ------------------------Products on the cart states and fuctions-----------------------------
  const [cartProducts, setCartProducts] = useState([]);

  // ------------------------TotalPrice of products states and functions--------------------------
  // Total price of products
  const [totalPriceOfProducts, setTotalPriceOfProducts] = useState(0);

  const updateTotalPriceOfProducts = () => {
    setTotalPriceOfProducts(totalPrice(cartProducts));
  };

  // ------------------------Orders states and fuctions-------------------------------------------

  const [order, setOrder] = useState([]);

  // ------------------------Others---------------------------------------------------------------

  useEffect(() => {
    console.log(cartProducts);
    updateTotalPriceOfProducts();
  }, [cartProducts]);

  // --------------------------Elements return--------------------------------
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
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
