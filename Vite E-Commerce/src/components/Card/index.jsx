import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts";
import "./styles.css";

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productData) => {
    context.openProductDetail();
    context.setProductToShow(productData);
  };

  const addProductToCar = (event, productData) => {
    event.stopPropagation();
    productData.count = 1;
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail();
    context.openCheckOutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((element) => element.id === id).length > 0;

    if (isInCart) {
      return (
        <button className="absolute m-2 top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full">
          <CheckIcon className="h-6 w-6 text-stone-100 p-1" />
        </button>
      );
    } else {
      return (
        <button
          onClick={(event) => {
            addProductToCar(event, data.data);
          }}
          className="absolute m-2 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
        >
          <PlusIcon className="h-6 w-6 text-black-500s" />
        </button>
      );
    }
  };

  return (
    //
    <div
      onClick={() => {
        showProduct(data);
      }}
      className="Card bg-white cursor-pointer w-56 h-60 rounded-lg  active:scale-110 transition ease duration-75"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
          {data.data.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light"> {data.data.title}</span>
        <span className="text-lg font-medium"> {data.data.price}$</span>
      </p>
    </div>
  );
}

export { Card };
