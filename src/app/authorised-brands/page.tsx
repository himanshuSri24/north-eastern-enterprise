import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerPage } from "../../components/banner/Banner";
import { Logosforab } from "@/components/partners/Logos";

const page = () => {
  return (
    <div className="font-jura">
      <Banner page={BannerPage.AUTHORISED_BRANDS} />
      <Logosforab />
    </div>
  );
};

export default page;
