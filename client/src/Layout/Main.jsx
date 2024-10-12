import { Outlet } from "react-router-dom";
import FooterComponent from "../Shared/Footer/FooterComponent";
import { NavbarComponent } from "./../Shared/Navbar/NavbarComponent";

const Main = () => {
  return (
    <div className="layout-css">
      <NavbarComponent />
      <div className="min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Main;
