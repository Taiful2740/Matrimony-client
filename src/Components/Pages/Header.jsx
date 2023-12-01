import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FooterMenu from "../Footer/FooterMenu";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterMenu></FooterMenu>
    </div>
  );
};

export default Header;
