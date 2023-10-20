import { XMarkIcon } from "@heroicons/react/24/solid";

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center p-4 border border-b-gray-200 border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

export { OrdersCard };
