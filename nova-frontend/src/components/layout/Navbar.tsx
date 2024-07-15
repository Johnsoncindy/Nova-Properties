import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Button,
} from "flowbite-react";
import apiRequest from "../../services/apiRequest";
import { AuthContext } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const {currentUser} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err);     
    }
  }

  return (
    <FlowbiteNavbar fluid rounded >
      <NavbarBrand as={Link} to="/">
        <img
          src="/logo.png"
          className="mr-3 h-12 w-auto sm:h-18 sm:w-auto"
          alt="Nova Properties Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Nova-Properties
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        {!currentUser && (
          <>
            {/* Hidden on small screens, visible on larger screens */}
            <Button
              as={Link}
              to="/login"
              pill
              className="hidden sm:inline-block sm:w-auto sm:px-3 bg-[#022F6B]"
            >
              Login
            </Button>
            <Button
              as={Link}
              to="/signup"
              className="hidden lg:inline-block lg:w-auto lg:px-3"
              color="light"
              pill
            >
              Signup
            </Button>
          </>
        )}
        {currentUser && (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={currentUser.avatar} rounded />}
          >
            <DropdownHeader>
              <span className="block text-sm">{currentUser.name}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </DropdownHeader>
            <DropdownItem as={Link} to="/profile">
              Profile
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem as={Button} to={handleLogout}>
              Logout
            </DropdownItem>
          </Dropdown>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/contact">
          Contact
        </NavbarLink>
        <NavbarLink as={Link} to="/agents">
          Agents
        </NavbarLink>
        {!currentUser && (
          <>
            {/* Shown in NavbarCollapse on small screens */}
            <NavbarLink className="block sm:hidden" as={Link} to="/login">
              Login
            </NavbarLink>
            <NavbarLink className="block sm:hidden" as={Link} to="/signup">
              Signup
            </NavbarLink>
          </>
        )}
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
