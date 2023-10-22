import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ShoopingCartProvider } from "../../contexts";
import Home from "./../Home/index";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
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
    {
      path: "/sign-in",
      element: <SignIn />,
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
