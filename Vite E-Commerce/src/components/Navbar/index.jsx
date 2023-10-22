import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts";

function Navbar() {
  const activeStyle = "underline underline-offset-8";
  const context = useContext(ShoppingCartContext);
  return (
    <nav className=" bg-white border-b-2 flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-4 ">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              context.setSearchByCategory("");
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>All</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => {
              context.setSearchByCategory("clothes");
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Clothes</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSearchByCategory("electronics");
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Electronics</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => {
              context.setSearchByCategory("furnitures");
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Furnitures</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => {
              context.setSearchByCategory("toys");
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Toys</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => {
              context.setSearchByCategory("others");
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Others</p>
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-4 ">
        <li>
          <p className="text-black/60">cchavarriacenteno8@gmail.com</p>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            onClick={() => {
              // context.setAnimationSwitch(!context.animationSwitch);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>My Orders</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>My Account</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Sign In</p>
          </NavLink>
        </li>
        <li>
          <p className="flex gap-2">
            <ShoppingCartIcon
              onClick={() => {
                context.isCheckoutSideMenuOpen
                  ? context.closeCheckOutSideMenu()
                  : context.openCheckOutSideMenu();
              }}
              className="h-6 w-6 text-black-500 cursor-pointer"
            />{" "}
            {context.cartProducts.length}
          </p>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
