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

  // ------------------------Filter products---------------------------------------------------------------
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchTitleBar, setSearchTitleBar] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const cleanTitlebarState = () => {
    setSearchTitleBar(null);
  };

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
    updateTotalPriceOfProducts();
  }, [cartProducts]);

  const filterBy = (searchType, items, searchTitleBar, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchTitleBar);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchTitleBar.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchTitleBar && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchTitleBar,
          searchByCategory
        )
      );
    }
    if (searchTitleBar && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchTitleBar, searchByCategory)
      );
    }
    if (!searchTitleBar && searchByCategory) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchTitleBar, searchByCategory)
      );
    }

    if (!searchTitleBar && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchTitleBar, searchByCategory));
    }
  }, [items, searchTitleBar, searchByCategory]);

  //  -------------------------------Animations--------------------------------------
  const [animationSwitch, setAnimationSwitch] = useState(false);

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
        searchByCategory,
        setSearchByCategory,
        animationSwitch,
        setAnimationSwitch,
        cleanTitlebarState,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoopingCartProvider, ShoppingCartContext };
