"use client";

import React from "react";
import Banner from "../../components/banner/Banner";
import { BannerType } from "../../components/banner/Banner";
import Form from "@/components/contact/Form";
import { useState } from "react";

const FAQTile = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#F5F5F5] rounded-[16px] p-6 flex flex-col gap-6 text-[12px] sm:text-[16px]">
      <div className="flex justify-between font-bold">
        <div className="text-[#151515] max-w-[80%]">{heading}</div>
        <div className="flex items-start justify-center">
          <button
            onClick={toggleExpanded}
            className="text-[#151515] cursor-pointer text-2xl transition-opacity"
          >
            {isExpanded ? "×" : "+"}
          </button>
        </div>
      </div>
      {isExpanded && <div className="text-[#747474]">{content}</div>}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="my-5 mx-10 sm:my-17 sm:ml-17 sm:mr-8">
      <div className="text-h5 sm:text-h1 font-bold leading-[120%] sm:mb-16 mb-5">
        Frequently asked questions
      </div>
      <div className="flex flex-col gap-4">
        <FAQTile
          heading="What areas do you currently distribute to?"
          content="All over the West Bengal and North Eastern States."
        />
        <FAQTile
          heading="How long does it take to receive a response after I contact you?"
          content="Within 2 Business days."
        />
        <FAQTile
          heading="Who can I speak to for business partnership inquiries?"
          content="Please directly contact with the proprietor Mr. Asit Kumar Aich (9832021150) and our Business Head Miss Payasti Aich (9434059201) or can directly email us at northee.slg@gmal.com"
        />
        <FAQTile
          heading="Do you deal in temperature-sensitive or cold-chain products?"
          content="Yes we deal in temperature-sensitive or cold-chain products."
        />
        <FAQTile
          heading="Are all your products certified and compliant?"
          content="Yes."
        />
      </div>
    </div>
  );
};

const ContactUsFormContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className=" hidden desk-2:block mb-6 text-left pt-10 pr-10">
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
        <div className="flex flex-col gap-0 mt-7 desk-2:mt-0 sm:gap-4">
          <div className="mx-auto my-1">
            <div className="text-h5 desk-2:text-[20px] font-bold">
              Contact Us
            </div>
          </div>
          <div className="mx-auto text-[12px] desk-2:text-[14px] mb-5">
            Please take a moment to fill out the form.
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full pb-10">
        {" "}
        {/* Added flex and justify-end */}
        <Form />
      </div>
    </>
  );
};

const Page = () => {
  return (
    <div className="font-jura">
      <Banner bannerType={BannerType.CONTACT_US} />
      <div className="flex w-full">
        <div className="w-full hidden desk-2:flex">
          <div className="w-1/2">
            <FAQs />
          </div>
          <div className="w-1/2 mt-34">
            <ContactUsFormContainer />
          </div>
        </div>
        <div className="w-full block desk-2:hidden">
          <ContactUsFormContainer />
          <FAQs />
        </div>
      </div>
    </div>
  );
};

export default Page;
