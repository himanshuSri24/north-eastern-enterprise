"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="group inline-block">
      <span className="relative inline-block">
        <span className="relative z-10 group-hover:text-[#161670] transition-colors duration-300">
          {children}
        </span>
        <span
          className={
            "absolute left-0 bottom-0 h-[2px] bg-[#161670] transition-all duration-300 z-0 " +
            (isActive ? "w-full" : "w-0 group-hover:w-full")
          }
          style={{ display: "block" }}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
};

export default NavLink;
