import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../contexts";
import { OrderCard } from "../../components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  console.log(context.order);
  return (
    <>
      <Layout className="App">MyOrder</Layout>
      <div>
        {context.order?.slice(-1)[0].products?.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            title={order.title}
            price={order.price}
            imgUrl={order.images[0]}
          />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
