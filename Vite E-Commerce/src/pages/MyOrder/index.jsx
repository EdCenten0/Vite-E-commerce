import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../contexts";
import { OrderCard } from "../../components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  console.log(context.order);
  return (
    <>
      <Layout className="App">
        <div className="flex items-center justify-center w-80 relative m-6">
          <Link to={"/my-orders"} className="absolute left-0 ">
            <ChevronLeftIcon className="h-6 w-6 text-black cursosr-pointer" />
          </Link>

          <h1>MyOrder</h1>
        </div>

        <div>
          {context.order?.slice(-1)[0].products?.map((order) => {
            return (
              <OrderCard
                key={order.id}
                id={order.id}
                title={order.title}
                price={order.price}
                imgUrl={order.images[0]}
                countOfProducts={order.count}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
