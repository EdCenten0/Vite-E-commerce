import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../contexts";
import { Link } from "react-router-dom";
import { EmptyOrdersIcon } from "./EmptyOrdersIcon";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.order.length > 0) {
      return (
        <>
          {context.order.map((order, index) => (
            <Link key={index} to={`/Vite-E-commerce/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className=" w-full h-full flex justify-center items-center flex-col">
            <figure className="w-20">
              <EmptyOrdersIcon />
            </figure>
            <div>
              <p className=" font-semibold">
                Nothing yet, add some produicts and check them out :)
              </p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Layout className="App">
        <div className="flex items-center justify-center w-80 relative">
          <h1>MyOrders</h1>
        </div>
      </Layout>
      {renderView()}
    </>
  );
}

export default MyOrders;
