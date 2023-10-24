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
      path: "/",
      element: <Home />,
    },
    {
      path: "/clothes",
      element: <Home />,
    },
    {
      path: "/electronics",
      element: <Home />,
    },
    {
      path: "/furnitures",
      element: <Home />,
    },
    {
      path: "/toys",
      element: <Home />,
    },
    {
      path: "/others",
      element: <Home />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/*",
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
