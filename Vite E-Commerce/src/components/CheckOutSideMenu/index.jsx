import { XMarkIcon } from "@heroicons/react/24/solid";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import { useContext, useRef } from "react";
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
        } checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg overflow-auto`}
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
      </aside>
    </CSSTransition>
  );
}

export { CheckOutSideMenu };
