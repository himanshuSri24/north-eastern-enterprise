"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getLocationsDimensions } from "@/constants/global";

const DynamicLocations = () => {
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

  const { width, height } = getLocationsDimensions(windowWidth);
  console.log("dynamicLocations: ", width, height, windowWidth);

  const locations = ["SILIGURI", "KOLKATA"];
  return locations.map((location) => (
    <div key={location} className="flex items-center gap-2 mob:gap-6">
      <div style={{ position: "relative", width: width, height: height }}>
        <iframe
          src={
            location === "SILIGURI"
              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.9447597894086!2d88.42317507592173!3d26.714211676765967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441d2d1a35275%3A0x57500ea0830d0e37!2sNORTH%20EASTERN%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1748718975324!5m2!1sen!2sin"
              : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.9447597894086!2d88.42317507592173!3d26.714211676765967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441d2d1a35275%3A0x57500ea0830d0e37!2sNORTH%20EASTERN%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1748718975324!5m2!1sen!2sin"
          }
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Transparent clickable overlay */}
        <a
          href={
            location === "SILIGURI"
              ? "https://www.google.com/maps/place/NORTH+EASTERN+ENTERPRISE/@26.7142165,88.4231751,17z/data=!3m1!4b1!4m6!3m5!1s0x39e441d2d1a35275:0x57500ea0830d0e37!8m2!3d26.7142117!4d88.42575!16s%2Fg%2F11flf1y5xg?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
              : "https://www.google.com/maps/place/NORTH+EASTERN+ENTERPRISE/@26.7142165,88.4231751,17z/data=!3m1!4b1!4m6!3m5!1s0x39e441d2d1a35275:0x57500ea0830d0e37!8m2!3d26.7142117!4d88.42575!16s%2Fg%2F11flf1y5xg?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          }
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            cursor: "pointer",
            background: "rgba(0,0,0,0)",
          }}
          aria-label="Open in Google Maps"
        ></a>
      </div>
      <div className="text-[6px] mob:text-xs md:text-base">
        {location === "SILIGURI" ? "Khudirampally, Siliguri" : "Kolkata, Garia"}
        <br />
        {location === "SILIGURI"
          ? "West Bengal - 734001"
          : "West Bengal - 562301"}
      </div>
    </div>
  ));
};

export default DynamicLocations;
