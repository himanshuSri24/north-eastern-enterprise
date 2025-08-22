"use client";
import React, { useState } from "react";
import Logo from "@/icons/logo.svg";
import NavLink from "../common/NavLink";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 lg:px-16 pt-10 mt-10 pb-10 mb-30 sticky top-0 z-50 bg-white">
        {/* Mobile Layout */}
        <div className="lg:hidden flex justify-between items-center w-full">
          <div className="flex items-center gap-3 flex-1 justify-center">
            <Logo width={50} height={40} />
            <span className="text-lg font-bold text-primary">
              NORTH EASTERN ENTERPRISE
            </span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-primary"></div>
              <div className="w-6 h-0.5 bg-primary"></div>
              <div className="w-6 h-0.5 bg-primary"></div>
            </div>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex items-center gap-6">
            <Logo width={70} height={60} />
            <span className="text-h2 font-bold text-primary">
              NORTH EASTERN ENTERPRISE
            </span>
          </div>
          <div className="flex items-center gap-14 text-title-1 font-bold">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/vision-and-mission">Vision & Mission</NavLink>
            <NavLink href="/authorised-brands">Authorised Brands</NavLink>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-primary">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <div className="w-6 h-6 relative">
                    <div className="absolute top-3 w-6 h-0.5 bg-primary transform rotate-45"></div>
                    <div className="absolute top-3 w-6 h-0.5 bg-primary transform -rotate-45"></div>
                  </div>
                </button>
              </div>

              <nav className="space-y-6">
                <div
                  className="text-title-1 font-bold"
                  onClick={closeMobileMenu}
                >
                  <NavLink href="/">Home</NavLink>
                </div>
                <div
                  className="text-title-1 font-bold"
                  onClick={closeMobileMenu}
                >
                  <NavLink href="/vision-and-mission">Vision & Mission</NavLink>
                </div>
                <div
                  className="text-title-1 font-bold"
                  onClick={closeMobileMenu}
                >
                  <NavLink href="/authorised-brands">Authorised Brands</NavLink>
                </div>
                <div
                  className="text-title-1 font-bold"
                  onClick={closeMobileMenu}
                >
                  <NavLink href="/contact-us">Contact Us</NavLink>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
