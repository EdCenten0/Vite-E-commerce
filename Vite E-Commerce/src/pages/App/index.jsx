import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ShoopingCartProvider } from "../../contexts";
import Home from "../Home/Index";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import { Navbar } from "../../components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
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
        </BrowserRouter>
      </ShoopingCartProvider>
    </>
  );
}

export default App;
