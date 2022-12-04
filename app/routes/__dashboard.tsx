import { Link, Outlet } from "@remix-run/react";

export default function MyActualApp() {
  return (
    <div className="w-screen md:w-2/3 lg:w-1/2 container mx-auto">
      <nav className="bg-stone-100 p-4 rounded-lg mt-2 flex items-center justify-between fixed w-screen md:w-2/3 lg:w-1/2 container mx-auto shadow-md">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/impact">Impact</Link>
        </div>
        <div className="flex items-center justify-between gap-2"></div>
      </nav>
      <div className="h-20" />
      <Outlet />
    </div>
  );
}
