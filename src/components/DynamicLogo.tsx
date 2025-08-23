"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/icons/logo.svg";
import { getLogoDimensions } from "@/constants/global";

const DynamicLogo = ({
  smallerVariant = false,
}: {
  smallerVariant?: boolean;
}) => {
  // Set a default width for server-side, will update after client mounts
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    // Only runs in browser, so window is defined
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = getLogoDimensions(windowWidth);

  return (
    <div
      style={{
        width: `${smallerVariant ? width * 0.5 : width}px`,
        height: `${smallerVariant ? height * 0.5 : height}px`,
        // transform: `scale(${smallerVariant ? 0.5 : 1})`,
      }}
      className={`flex items-center ${
        smallerVariant ? "justify-start" : "justify-center"
      } overflow-visible`}
    >
      <Logo className="origin-center" />
    </div>
  );
};

export default DynamicLogo;
