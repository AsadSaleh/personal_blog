import { NavLink, Outlet } from "@remix-run/react";
import cx from "classnames";

export default function MyActualApp() {
  return (
    <div className="w-screen md:w-2/3 lg:w-1/2 container mx-auto">
      <nav className="bg-stone-100 p-4 rounded-lg mt-2 flex items-center justify-between fixed w-screen md:w-2/3 lg:w-1/2 container mx-auto shadow-md">
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => cx({ "font-semibold": isActive })}
          >
            Home
          </NavLink>
          <NavLink
            to="/journey"
            className={({ isActive }) => cx({ "font-semibold": isActive })}
          >
            Journey
          </NavLink>
          <NavLink
            to="/impact"
            className={({ isActive }) => cx({ "font-semibold": isActive })}
          >
            Impact
          </NavLink>
        </div>
      </nav>
      <div className="h-20" />
      <Outlet />
    </div>
  );
}
