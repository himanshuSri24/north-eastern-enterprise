"use client";
import React, { useState, useEffect } from "react";
import NavLink from "../common/NavLink";
import DynamicLogo from "../DynamicLogo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="flex justify-between items-center px-4 lg:px-16 pt-10 mt-10 pb-10 mb-10 mob:mb-30 sticky top-0 z-30 bg-white">
        {/* Mobile Layout */}
        <div className="desk-1:hidden flex justify-between items-center w-full">
          <div
            className="flex items-center gap-3 flex-1 justify-start cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <DynamicLogo />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden desk-1:flex justify-between items-center w-full">
          <div
            className="flex items-center gap-6 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <DynamicLogo />
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
            className="fixed inset-0  bg-opacity-20 z-40 lg:hidden"
            style={{ backdropFilter: "blur(4px)" }}
            onClick={closeMobileMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-full max-w-80 bg-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-start items-center mb-8">
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <div className="w-6 h-6 relative">
                    <div className="absolute top-3 w-6 h-0.5 bg-black transform rotate-45"></div>
                    <div className="absolute top-3 w-6 h-0.5 bg-black transform -rotate-45"></div>
                  </div>
                </button>
              </div>

              <nav className="space-y-6 flex flex-col gap-y-6 text-center py-20">
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
