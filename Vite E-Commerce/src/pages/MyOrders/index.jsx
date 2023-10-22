import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../contexts";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout className="App">
        <div className="flex items-center justify-center w-80 relative">
          <h1>MyOrders</h1>
        </div>
      </Layout>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  );
}

export default MyOrders;
