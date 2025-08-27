import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerType } from "../../components/banner/Banner";
import { Logosforab } from "@/components/partners/Logos";

const page = () => {
  return (
    <div className="font-jura">
      <Banner bannerType={BannerType.AUTHORISED_BRANDS} />
      <Logosforab />
    </div>
  );
};

export default page;
