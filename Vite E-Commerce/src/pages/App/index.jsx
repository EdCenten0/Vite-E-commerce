import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoopingCartProvider } from "../../contexts";
import Home from "./../Home/index";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import { Navbar } from "../../components/Navbar";
import { CheckOutSideMenu } from "../../components/CheckOutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/Vite-E-commerce/",
      element: <Home />,
    },
    {
      path: "/Vite-E-commerce/clothes",
      element: <Home />,
    },
    {
      path: "/Vite-E-commerce/electronics",
      element: <Home />,
    },
    {
      path: "/Vite-E-commerce/furnitures",
      element: <Home />,
    },
    {
      path: "/Vite-E-commerce/toys",
      element: <Home />,
    },
    {
      path: "/Vite-E-commerce/others",
      element: <Home />,
    },
    {
      path: "/Vite-E-commerce/my-order",
      element: <MyOrder />,
    },
    {
      path: "/Vite-E-commerce/my-account",
      element: <MyAccount />,
    },
    {
      path: "/Vite-E-commerce/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/Vite-E-commerce/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/Vite-E-commerce/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/Vite-E-commerce/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <ShoopingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckOutSideMenu></CheckOutSideMenu>
        </BrowserRouter>
      </ShoopingCartProvider>
    </>
  );
}

export default App;
