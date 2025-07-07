import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerPage } from "../../components/banner/Banner";
import Form from "@/components/contact/Form";

const getFAQTile = (heading: string, content: string) => {
  return (
    <div className="bg-[#F5F5F5] rounded-[16px] p-6">
      <div>
        <div className="text-[#151515]">{heading}</div>
        <div>x</div>
      </div>
      <div className="text-[#747474]">{content}</div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="font-jura">
      <Banner page={BannerPage.CONTACT_US} />
      <div className="flex w-full">
        <div className="w-1/2">
          <div className="my-17 ml-17 mr-8">
            <div className="text-h1 font-bold leading-[120%] mb-16">
              Frequently asked questions
            </div>
            {getFAQTile(
              "Do you offer same-day or next-day delivery?",
              "Yes, same-day or next-day delivery is available for select locations, based on stock availability."
            )}
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-4">
            <div className="mb-6 text-left pt-10 pr-10">
              <div className="text-body-1">+91 9832021150</div>
              <div className="text-body-1 mb-4">+91 9434059201</div>
              <div className="text-body-1">hr.nee@gmail.com</div>
              <div className="text-body-1 mb-4">ops.nee@gmail.com</div>
              <div className="text-body-1 font-bold mb-4">Contact info</div>
              <div className="text-body-1">
                Our customer service team will reach out to you within one
                business day, please use this form or directly contact us via
                email or phone.
              </div>
            </div>
            <div className="mx-auto my-1">
              <div className="text-[20px] font-bold">Contact Us</div>
            </div>
            <div className="mx-auto text-[14px] mb-5">
              Please take a moment to fill out the form.
            </div>
          </div>

          <div className="flex justify-center w-full pb-10">
            {" "}
            {/* Added flex and justify-end */}
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
