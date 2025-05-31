import React from "react";
import Logo from "@/app/icons/logo.svg";
import NavLink from "../common/NavLink";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-16 pt-10 mt-10 pb-10 mb-30 sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-6">
          <Logo width={70} height={60} />
          <span className="text-h2 font-bold text-primary">
            NORTH EASTERN ENTERPRISE
          </span>
        </div>
        <div className="flex items-center gap-14 text-title-1 font-bold">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Vision & Mission</NavLink>
          <NavLink href="#">Authorised Brands</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
