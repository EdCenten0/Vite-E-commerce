import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
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
    </aside>
  );
}

export { ProductDetail };
