import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts";

function Card(data) {
  const context = useContext(ShoppingCartContext);
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
          {data.data.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <button
          onClick={() => {
            context.setCount(context.count + 1);
          }}
          className="absolute m-2 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
        >
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light"> {data.data.title}</span>
        <span className="text-lg font-medium"> {data.data.price}$</span>
      </p>
    </div>
  );
}

export { Card };
