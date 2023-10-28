import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../contexts";
import { OrderCard } from "../../components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <>
      <Layout className="App">
        <div className="flex items-center justify-center w-80 relative m-6">
          <Link to={"/Vite-E-commerce/my-orders"} className="absolute left-0 ">
            <ChevronLeftIcon className="h-6 w-6 text-black cursosr-pointer" />
          </Link>

          <h1>MyOrder</h1>
        </div>

        <div>
          {context.order?.[index]?.products?.map((order) => {
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
