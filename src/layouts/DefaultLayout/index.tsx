import { Outlet } from "react-router-dom";
import {NavBar} from "@components/index";

const DefaultLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
