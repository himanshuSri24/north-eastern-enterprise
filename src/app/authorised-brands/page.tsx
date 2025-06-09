import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerPage } from "../../components/banner/Banner";
import WhyNEE from "../../components/whyNee/WhyNEE";
import Logos, { Logosforab } from "@/components/partners/Logos";

const page = () => {
  return (
    <div className="font-jura">
      <Banner page={BannerPage.AUTHORISED_BRANDS} />
      <Logosforab />
    </div>
  );
};

export default page;
