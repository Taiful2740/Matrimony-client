import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo (2).png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Log Out Successfully"))
      .catch(error => console.log(error.message));
  };
  return (
    <div className="max-w-6xl mx-auto ">
      <Navbar fluid rounded>
        <Link to="/">
          <div className="flex items-center justify-center">
            <img
              className="w-[50px] h-[50px] mr-2 invisible md:visible lg:visible"
              src={logo}
              alt=""
            />
            <span className="self-center whitespace-nowrap text-3xl font-extrabold hover:text-[#18c4cc]">
              Bondhon.com
            </span>
          </div>
        </Link>
        {/* <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div> */}

        <Navbar.Collapse>
          <div className="flex gap-4 text-2xl font-semibold">
            <NavLink
              className="text-black hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="text-black hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
              to="/userProfile"
            >
              Biodatas
            </NavLink>
            <NavLink
              className="text-black hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
              to="/aboutUs"
            >
              About Us
            </NavLink>
            <NavLink
              className="text-black hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
              to="/contact"
            >
              Contact
            </NavLink>

            {user ? (
              ""
            ) : (
              <>
                <li>
                  <NavLink
                    className="text-black hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
                    to="/signup"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {user && <></>}
          </div>
          <div className="navbar-center -ml-28  md:navbar-center lg:navbar-center lg:ml-32">
            {user ? (
              <>
                <div className="flex items-center justify-center text-2xl font-semibold ">
                  <span>{user?.displayName}</span>
                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <img
                        className="w-10 rounded-full ml-2 "
                        src={user?.photoURL}
                        alt=""
                      />
                    </label>
                  </div>
                  <a
                    onClick={handleLogOut}
                    className="text-black cursor-pointer hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
                  >
                    Log Out
                  </a>
                </div>
              </>
            ) : (
              <NavLink
                className="text-2xl font-semibold hover:bg-[#18c4cc] px-2 pb-2 hover:text-white rounded-full"
                to="/login"
              >
                Login
              </NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
