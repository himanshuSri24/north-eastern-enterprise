import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerType } from "../../components/banner/Banner";
import WhyNEE from "../../components/whyNee/WhyNEE";

const page = () => {
  return (
    <div className="font-jura">
      <Banner bannerType={BannerType.VISION_MISSION} />
      <WhyNEE />
    </div>
  );
};

export default page;
