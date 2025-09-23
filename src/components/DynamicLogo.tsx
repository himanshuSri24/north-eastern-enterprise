"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/icons/logo.svg";
import FallbackLogo from "./FallbackLogo";
import { getLogoDimensions } from "@/constants/global";

const DynamicLogo = ({
  smallerVariant = false,
}: {
  smallerVariant?: boolean;
}) => {
  // Set a default width for server-side, will update after client mounts
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);

    // Only runs in browser, so window is defined
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width with a slight delay to ensure proper iOS rendering
    const initializeWidth = () => {
      handleResize();
      // Double-check after a brief delay for iOS Safari
      setTimeout(handleResize, 100);
    };

    initializeWidth();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    // iOS-specific events
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 200); // Delay for orientation change
    });

    // Clean up listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const { width, height } = getLogoDimensions(windowWidth);

  // Error boundary - if Logo component fails, use fallback
  if (hasError) {
    return (
      <FallbackLogo
        width={smallerVariant ? width * 0.5 : width}
        height={smallerVariant ? height * 0.5 : height}
        className="logo-container"
      />
    );
  }

  // Prevent hydration mismatch by not rendering dimensions until client-side
  if (!isClient) {
    return (
      <div className="flex items-center justify-center w-48 h-12 logo-container">
        <FallbackLogo width={200} height={20} />
      </div>
    );
  }

  try {
    return (
      <div
        style={{
          width: `${smallerVariant ? width * 0.5 : width}px`,
          height: `${smallerVariant ? height * 0.5 : height}px`,
          minWidth: `${smallerVariant ? width * 0.5 : width}px`,
          minHeight: `${smallerVariant ? height * 0.5 : height}px`,
        }}
        className={`flex items-center ${
          smallerVariant ? "justify-start" : "justify-center"
        } shrink-0 logo-container`}
      >
        <Logo
          className="w-full h-full object-contain"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          onError={() => setHasError(true)}
        />
      </div>
    );
  } catch (error) {
    console.warn("Logo rendering failed, using fallback:", error);
    return (
      <FallbackLogo
        width={smallerVariant ? width * 0.5 : width}
        height={smallerVariant ? height * 0.5 : height}
        className="logo-container"
      />
    );
  }
};

export default DynamicLogo;
