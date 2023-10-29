import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts";

function OrderCard(props) {
  const context = useContext(ShoppingCartContext);
  const { id, title, imgUrl, price, countOfProducts, handleDelete } = props;
  const [productCount, setProductCount] = useState(
    countOfProducts != undefined ? countOfProducts : 1
  );

  const reduceProductCount = () => {
    if (productCount <= 1) {
      setProductCount(1);
    } else {
      setProductCount(productCount - 1);
      const indexOfProduct = searchProductIndexInsideArray(
        id,
        context.cartProducts
      );
      context.cartProducts[indexOfProduct].count = productCount - 1;
      context.updateTotalPriceOfProducts();
    }
  };

  const searchProductIndexInsideArray = (id, arr) => {
    const obj = arr.find((element) => element.id === id);
    const indexOfObj = arr.indexOf(obj);

    return indexOfObj;
  };

  const increaseProductCount = () => {
    setProductCount(productCount + 1);
    const indexOfProduct = searchProductIndexInsideArray(
      id,
      context.cartProducts
    );
    context.cartProducts[indexOfProduct].count = productCount + 1;

    context.updateTotalPriceOfProducts();
  };

  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer animate-pulse" />
    );
  }

  return (
    <div className="flex justify-between items-center p-4 border border-b-gray-200">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imgUrl}
            alt={title}
          />
        </figure>
        <div>
          <p className="text-sm font-light ">{title}</p>
          <p className="text-lg font--medium">${price}</p>
          <div className="flex gap-3">
            <MinusIcon
              onClick={() => {
                reduceProductCount();
              }}
              className={`${
                window.location.pathname.includes(
                  "/Vite-E-commerce/my-orders/"
                ) === true
                  ? "hidden"
                  : ""
              } bg-red-200 rounded-lg h-6 w-6 text-black-500 cursor-pointer`}
            />
            <div className="bg-gray-300 w-8 flex justify-center rounded-md">
              <p className="select-none">{productCount}</p>
            </div>
            <PlusIcon
              onClick={() => {
                increaseProductCount();
              }}
              className={`${
                window.location.pathname.includes(
                  "/Vite-E-commerce/my-orders/"
                ) === true
                  ? "hidden"
                  : ""
              }  bg-green-200 rounded-lg h-6 w-6 text-black-500 cursor-pointer`}
            />
          </div>
        </div>
      </div>

      <div onClick={() => handleDelete(id)} className="flez items-center gap-2">
        {renderXMarkIcon}
      </div>
    </div>
  );
}

export { OrderCard };
