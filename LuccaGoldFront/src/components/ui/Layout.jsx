import { Outlet } from "react-router-dom";
import Navbar from "./navigation-menu";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
}
