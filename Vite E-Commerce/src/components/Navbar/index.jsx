import {
  ArchiveBoxIcon,
  InboxIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts";
import { CSSTransition } from "react-transition-group";
import "../../index.css";

function Navbar() {
  const activeStyle = "underline underline-offset-8";
  const context = useContext(ShoppingCartContext);
  const [userMenuIsActive, setUserMenuIsActive] = useState(false);
  const closeEveryThing = () => {
    context.closeCheckOutSideMenu();
    context.closeProductDetail();
    setUserMenuIsActive(false);
  };
  return (
    <nav className=" bg-white border-b-2 flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-4 ">
        <li className="font-semibold text-lg hidden md:inline">
          <NavLink
            to="/Vite-E-commerce/"
            onClick={() => {
              context.cleanTitlebarState();
              context.setSearchByCategory("");
              closeEveryThing();
            }}
          >
            <p>Shopi</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/"
            onClick={() => {
              context.setSearchByCategory("");
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>All</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/clothes"
            onClick={() => {
              context.setSearchByCategory("clothes");
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Clothes</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/electronics"
            onClick={() => {
              context.setSearchByCategory("electronics");
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Electronics</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/furnitures"
            onClick={() => {
              context.setSearchByCategory("furnitures");
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Furnitures</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/toys"
            onClick={() => {
              context.setSearchByCategory("toys");
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Toys</p>
          </NavLink>
        </li>
      </ul>

      <ul className=" items-center gap-4  hidden md:flex">
        <li>
          <p className="text-black/60">userintheapp@test.com</p>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/my-orders"
            onClick={() => {
              context.cleanTitlebarState();
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>My Orders</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Vite-E-commerce/my-account"
            onClick={() => {
              context.cleanTitlebarState();
              closeEveryThing();
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>My Account</p>
          </NavLink>
        </li>
        <li>
          <p className="flex gap-2">
            <ShoppingCartIcon
              onClick={() => {
                context.cleanTitlebarState();
                context.isCheckoutSideMenuOpen
                  ? context.closeCheckOutSideMenu()
                  : context.openCheckOutSideMenu();

                setUserMenuIsActive(false);
              }}
              className="h-6 w-6 text-black-500 cursor-pointer"
            />
            {context.cartProducts.length}
          </p>
        </li>
      </ul>
      <ul className="md:hidden relative">
        <UserCircleIcon
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={(event) => {
            context.cleanTitlebarState();
            setUserMenuIsActive(!userMenuIsActive);
            context.closeCheckOutSideMenu();
            context.closeProductDetail();
            event.stopPropagation();
          }}
        />
        <CSSTransition
          in={userMenuIsActive}
          nodeRef={null}
          timeout={1000}
          classNames={"fade"}
        >
          <div
            className={`${
              userMenuIsActive ? "inline-block" : "hidden"
            } w-64 h-44 absolute bg-white border border-black rounded-lg right-0 p-2`}
          >
            <ul className="flex flex-col items-center h-full w-full justify-around">
              <li className="flex gap-2 w-full ">
                <InboxIcon className=" h-6 w-6 text-black-500 cursor-pointer" />
                <p className="text-black/60 ">userintheapp@test.com</p>
              </li>
              <li className="flex  gap-2  w-full ">
                <ArchiveBoxIcon className="h-6 w-6 text-black-500 " />
                <NavLink
                  to="/Vite-E-commerce/my-orders"
                  onClick={() => {
                    context.cleanTitlebarState();
                    closeEveryThing();
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  <p>My Orders</p>
                </NavLink>
              </li>
              <li className="flex  gap-2 w-full ">
                <UserIcon className="h-6 w-6 text-black-500 " />
                <NavLink
                  to="/Vite-E-commerce/my-account"
                  onClick={() => {
                    context.cleanTitlebarState();
                    closeEveryThing();
                  }}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  <p className="">My Account</p>
                </NavLink>
              </li>
              <li className="w-full ">
                <p className="flex gap-2">
                  <ShoppingCartIcon
                    onClick={() => {
                      context.cleanTitlebarState();
                      context.isCheckoutSideMenuOpen
                        ? context.closeCheckOutSideMenu()
                        : context.openCheckOutSideMenu();
                    }}
                    className="h-6 w-6 text-black-500 cursor-pointer"
                  />
                  {context.cartProducts.length}
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </ul>
    </nav>
  );
}

export { Navbar };
