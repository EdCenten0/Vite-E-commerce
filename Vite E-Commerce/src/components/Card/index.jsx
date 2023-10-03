function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-6141.jpg"
          alt="headphones"
        />
        <div className="absolute m-2 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">300$</span>
      </p>
    </div>
  );
}

export { Card };
