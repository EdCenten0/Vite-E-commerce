import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppingCartContext } from "../../contexts";
import { OrderCard } from "../OrderCard";

function CheckOutSideMenu() {
  const context = useContext(ShoppingCartContext);

  // Transition

  const nodeRef = useRef(null);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.12.2024",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: context.totalPriceOfProducts,
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };
  return (
    <CSSTransition
      in={context.isCheckoutSideMenuOpen}
      classNames="fade"
      timeout={400}
      nodeRef={nodeRef}
    >
      <aside
        ref={nodeRef}
        className={` ${
          context.isCheckoutSideMenuOpen ? "none" : "hidden"
        } checkout-side-menu box-border flex flex-col fixed bg-white right-0 border border-black rounded-lg overflow-auto`}
      >
        <div className="flex justify-between  items-center p-6">
          <h2 className="font-medium text-xl ">My Order</h2>{" "}
          <div>
            <XMarkIcon
              onClick={context.closeCheckOutSideMenu}
              className="h-6 w-6 text-black-500 cursor-pointer animate-pulse"
            />
          </div>
        </div>

        <div>
          {context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imgUrl={product.images[0]}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="fixed bottom-0 bg-white .checkout-section border border-t-slate-400 border-l-black-400 p-2 rounded-sm">
          <p className="">
            <span className="font-medium mr-60 select-none">Total: </span>
            <span className=" text-lg font-bold ">
              ${context.totalPriceOfProducts}
            </span>
          </p>

          <Link to={"/Vite-E-commerce/my-orders/last"}>
            <button
              onClick={() => {
                handleCheckout();
                context.closeCheckOutSideMenu();
              }}
              className=" w-full border border-slate-600 pb-1  rounded-md text-white font-medium bg-black  active:bg-white active:text-black hover:bg-slate-900 hover:text-slate-100 "
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    </CSSTransition>
  );
}

export { CheckOutSideMenu };
