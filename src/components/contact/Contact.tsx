import React from "react";
import Logo from "@/icons/logo.svg";
import NavLink from "../common/NavLink";
import Form from "./Form";

const ContactHeader = () => {
  return (
    <div className="flex items-center gap-4 mb-9.5">
      <Logo width={46} height={39} />
      <div className="text-h4 font-bold text-primary">
        NORTH EASTERN ENTERPRISE
      </div>
    </div>
  );
};

const Seperator = () => {
  return <div className="h-[1px] bg-primary"></div>;
};

const getLocations = () => {
  const locations = ["SILIGURI", "KOLKATA"];
  return locations.map((location) => (
    <div key={location} className="flex items-center gap-6">
      <iframe
        src={
          location === "SILIGURI"
            ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.9447597894086!2d88.42317507592173!3d26.714211676765967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441d2d1a35275%3A0x57500ea0830d0e37!2sNORTH%20EASTERN%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1748718975324!5m2!1sen!2sin"
            : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.9447597894086!2d88.42317507592173!3d26.714211676765967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441d2d1a35275%3A0x57500ea0830d0e37!2sNORTH%20EASTERN%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1748718975324!5m2!1sen!2sin"
        }
        width="221"
        height="124"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        {location === "SILIGURI" ? "Khudirampally, Siliguri" : "Kolkata, Garia"}
        <br />
        {location === "SILIGURI"
          ? "West Bengal - 734001"
          : "West Bengal - 562301"}
      </div>
    </div>
  ));
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
    <div className="w-[55%] flex flex-col gap-10 text-title-1 font-bold">
      {getLocations()}
      <ContactInfo />
      {/* navbar in vertical manner with same effect as the one in the home page */}
      <div className="flex flex-col gap-4 w-max text-title-1 font-bold mb-10">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Vision & Mission</NavLink>
        <NavLink href="#">Authorised Brands</NavLink>
        <NavLink href="#">Contact Us</NavLink>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="w-[45%] flex flex-col gap-4">
      <div className="text-title-1 font-bold">Contact Us</div>
      <div className="text-title-1 font-medium leading-[120%]">
        Our customer service team will reach out to you within one business day
        please use this form or directly contact us via email or phone.
      </div>
      <div className="flex flex-col mt-10">
        <div className="text-h2 text-center font-bold">Request a Quote</div>
        <div className="title-1 font-medium text-center mb-11">
          Please take a moment to fill out the form.
        </div>
        <Form />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-9.5 pt-14 px-16 bg-grey">
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
