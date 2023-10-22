import { XMarkIcon } from "@heroicons/react/24/solid";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import { useContext, useRef } from "react";
import { ShoppingCartContext } from "../../contexts";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  // Transition

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={context.isProductDetailOpen}
      classNames="fade"
      timeout={400}
      nodeRef={nodeRef}
    >
      <aside
        ref={nodeRef}
        className={` ${
          context.isProductDetailOpen ? "none" : "hidden"
        } product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg`}
      >
        <div className="flex justify-between  items-center p-6">
          <h2 className="font-medium text-xl ">Detail</h2>{" "}
          <div>
            <XMarkIcon
              onClick={context.closeProductDetail}
              className="h-6 w-6 text-black-500 cursor-pointer animate-pulse"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 ">
          <img
            className=" w-4/5 h-full rounded-lg"
            src={
              context.productToShow.data?.images
                ? context.productToShow.data.images[0]
                : ""
            }
            alt={context.productToShow.title}
          />

          <p className="flex flex-col items-center p-4">
            <span className=" font-medium text-2xl mb-4">
              ${context.productToShow.data?.price}
            </span>
            <span className=" font-medium text-md">
              ${context.productToShow.data?.title}
            </span>
            <span className=" font-light text-sm">
              ${context.productToShow.data?.description}
            </span>
          </p>
        </div>
      </aside>
    </CSSTransition>
  );
}

export { ProductDetail };
