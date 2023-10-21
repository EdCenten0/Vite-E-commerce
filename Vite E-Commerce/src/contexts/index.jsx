import { createContext, useEffect, useState } from "react";
import { totalPrice } from "../components/Utils";
import { apiUrl } from "../api/api";

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
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchTitleBar, setSearchTitleBar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(cartProducts);
    updateTotalPriceOfProducts();
  }, [cartProducts]);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchTitleBar) {
      setFilteredItems(filteredItemsByTitle(items, searchTitleBar));
    }
  }, [items, searchTitleBar]);

  console.log(filteredItems);

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
        items,
        setItems,
        searchTitleBar,
        setSearchTitleBar,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
