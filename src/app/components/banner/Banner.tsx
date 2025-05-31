import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col p-16 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59] pb-23">
      <div className="text-h1 text-white font-bold leading-[120%]">
        Trusted Surgical Goods Distributer <br /> in North-East India
      </div>
      <div className="text-h5 text-white font-medium">
        Serving hospitals, clinics and government bodies since 1995
      </div>
    </div>
  );
};

export default Banner;
