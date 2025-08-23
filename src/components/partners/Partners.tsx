import React from "react";
import Logos from "./Logos";

const Partners = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 my-3.25 mob:my-28">
      <div className="sm:w-2/5 text-h4 sm:text-h1 text-center sm:text-start text-primary font-bold px-10 sm:px-20 leading-[120%]">
        Working with best Clients and Partners
      </div>
      <Logos />
    </div>
  );
};

export default Partners;
