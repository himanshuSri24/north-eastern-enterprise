import React from "react";
import NavLink from "../common/NavLink";
import DynamicLogo from "../DynamicLogo";
import DynamicLocations from "../DynamicLocations";

const ContactHeader = () => {
  return (
    <div className="flex justify-start gap-4 mob:mb-9.5">
      <DynamicLogo smallerVariant={true} />
    </div>
  );
};

const Seperator = () => {
  return <div className="h-[1px] bg-primary"></div>;
};

const ContactInfo = () => {
  return (
    <>
      <div>
        +91 9832021150
        <br />
        +91 9434059201
      </div>
      <div>
        hr.nee@gmail.com
        <br />
        ops.nee@gmail.com
      </div>
    </>
  );
};

const Left = () => {
  return (
    <div className="w-[55%] overflow-hidden flex flex-col gap-10 text-title-1 font-bold">
      <DynamicLocations />
      <div className="flex-col gap-2 text-body-2 flex mob:hidden pb-4">
        <ContactInfo />
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="w-[45%] flex flex-col gap-10 items-end text-right pb-10">
      {/* Contact Info */}
      <div className="flex-col gap-2 hidden mob:flex">
        <ContactInfo />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-3 mob:gap-4 w-max text-body-2 mob:text-title-1 font-bold">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/vision-and-mission">Vision & Mission</NavLink>
        <NavLink href="/authorised-brands">Authorised Brands</NavLink>
        <NavLink href="/contact-us">Contact Us</NavLink>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-9.5 pt-5 md:pt-14 px-4 mob:px-8 sm:px-16 bg-grey mt-6 mob:mt-0">
      <ContactHeader />
      <Seperator />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Contact;
