import { Outlet } from "react-router";
import Navbar from "../Components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
