import React from "react";

export enum BannerPage {
  HOME = "HOME",
  VISION_MISSION = "VISION_MISSION",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
}

interface BannerProps {
  page: BannerPage;
}

const Banner = ({ page }: BannerProps) => {
  if (page === BannerPage.HOME) {
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
  } else if (page === BannerPage.VISION_MISSION) {
    return (
      <div className="flex flex-col p-16 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59] pb-23">
        <div className="text-h5 text-white font-medium text-center px-64">
          North Eastern Enterprise is a trusted surgical distribution firm based
          in Northeast India, serving hospitals, clinics, and public health
          institutions for over 25 years. With precision in distribution and
          passion in service, we ensure critical surgical goods reach those who
          need them — on time, every time. Our mission is simple yet vital: to
          strengthen healthcare delivery by being the most reliable link in the
          supply chain. Backed by deep expertise and long-standing
          relationships, we are proud to be a partner in saving lives — one
          delivery at a time.
        </div>
      </div>
    );
  }

  return <></>;
};

export default Banner;
