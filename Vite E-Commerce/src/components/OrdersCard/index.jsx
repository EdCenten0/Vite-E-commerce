import {
  CalendarDaysIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex  justify-center items-center ">
      <div className="flex justify-center w-96 p-4 border border-black m-2 rounded-md ">
        <div className="grid grid-cols-2 w-full">
          <div className="grid grid-rows-2">
            <span className="flex items-center gap-2 font-light text-md">
              <CalendarDaysIcon className="h-4 w-4 text-black" />
              01.02.23
            </span>
            <span className="text-md flex items-center gap-2">
              <ShoppingBagIcon className="h-4 w-4 text-black" />
              {totalProducts}
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className=" font-bold text-xl">${totalPrice}</span>{" "}
            <ChevronRightIcon className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { OrdersCard };
