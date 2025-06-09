import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerPage } from "../../components/banner/Banner";
import Form from "@/components/contact/Form";

const Page = () => {
  return (
    <div className="font-jura">
      <Banner page={BannerPage.CONTACT_US} />

      <div>
        <div className="mb-6 text-left pl-298 pt-10 pr-10">
          <div className="text-body-1">+91 9832021150</div>
          <div className="text-body-1 mb-4">+91 9434059201</div>
          <div className="text-body-1">hr.nee@gmail.com</div>
          <div className="text-body-1 mb-4">ops.nee@gmail.com</div>
          <div className="text-body-1 font-bold mb-4">Contact info</div>
          <div className="text-body-1">
            Our customer service team will reach out to you within one business
            day, please use this form or directly contact us via email or phone.
          </div>
        </div>
        <div className="pl-365 my-1">
          <div className="text-[20px] font-bold">Contact Us</div>
        </div>
        <div className="text-[14px] mb-5 pl-350">
          Please take a moment to fill out the form.
        </div>
      </div>

      <div className="flex justify-end w-full pr-10 pb-10">
        {" "}
        {/* Added flex and justify-end */}
        <Form />
      </div>
    </div>
  );
};

export default Page;
