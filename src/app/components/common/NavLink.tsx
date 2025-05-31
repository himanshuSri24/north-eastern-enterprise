import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="group inline-block">
    <span className="relative inline-block">
      <span className="relative z-10 group-hover:text-[#161670] transition-colors duration-300">
        {children}
      </span>
      <span
        className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#161670] transition-all duration-300 group-hover:w-full z-0"
        style={{ display: "block" }}
        aria-hidden="true"
      />
    </span>
  </Link>
);

export default NavLink;
