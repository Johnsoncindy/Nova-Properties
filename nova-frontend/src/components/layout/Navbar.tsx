import React from "react";
import { Link } from "react-router-dom";
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

const Navbar: React.FC = () => {
  const isAuthenticated = false; // Replace with actual authentication logic
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  }; // Replace with actual user data

  return (
    <FlowbiteNavbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/012/500/133/small/illustration-of-a-house-and-a-trees-good-for-any-business-related-to-housing-or-real-estate-vector.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Nova Properties Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Nova-Properties
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        {!isAuthenticated && (
          <>
            {/* Hidden on small screens, visible on larger screens */}
            <Button
              as={Link}
              to="/login"
              pill
              className="hidden sm:inline-block sm:w-auto sm:px-3"
            >
              Login
            </Button>
            <Button
              as={Link}
              to="/signup"
              className="hidden sm:inline-block sm:w-auto sm:px-3"
              color="success"
              pill
            >
              Signup
            </Button>
          </>
        )}
        {isAuthenticated && (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user.avatar} rounded />}
          >
            <DropdownHeader>
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </DropdownHeader>
            <DropdownItem as={Link} to="/profile">
              Profile
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem as={Link} to="/logout">
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
        <NavbarLink as={Link} to="/properties">
          Properties
        </NavbarLink>
        {!isAuthenticated && (
          <>
            {/* Shown in NavbarCollapse on small screens */}
            <NavbarLink className="md:hidden" as={Link} to="/login">
              Login
            </NavbarLink>
            <NavbarLink className="md:hidden" as={Link} to="/signup">
              Signup
            </NavbarLink>
          </>
        )}
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
