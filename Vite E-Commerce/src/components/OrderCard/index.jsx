import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function OrderCard(props) {
  const { id, title, imgUrl, price, handleDelete } = props;
  const [productCount, setProductCount] = useState(0);

  const reduceProductCount = () => {
    if (productCount <= 0) {
      setProductCount(0);
    } else {
      setProductCount(productCount - 1);
    }
  };
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
              className="h-6 w-6 text-black-500 cursor-pointer"
            />
            <div className="bg-gray-300 w-8 flex justify-center rounded-md">
              <p className="select-none">{productCount}</p>
            </div>
            <PlusIcon
              onClick={() => {
                setProductCount(productCount + 1);
              }}
              className="h-6 w-6 text-black-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div onClick={() => handleDelete(id)} className="flez items-center gap-2">
        <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer animate-pulse" />
      </div>
    </div>
  );
}

export { OrderCard };
