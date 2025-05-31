import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col justify-start items-start gap-3.5">
          {/* Name */}
          <div>
            <div className="text-body-1 font-medium">Name</div>
            <input type="text" className="border-1 w-[234px] h-[42px]" />
          </div>
          {/* Email / Phone */}
          <div>
            <div className="text-body-1 font-medium">
              Email / Phone
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <input type="text" className="border-1 w-[234px] h-[42px]" />
          </div>
          {/* Organization */}
          <div>
            <div className="text-body-1 font-medium">
              Organization
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <input type="text" className="border-1 w-[234px] h-[42px]" />
          </div>
          {/* Subject */}
          <div>
            <div className="text-body-1 font-medium">
              Subject
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <select className="border-1 w-[234px] h-[42px]">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Request a Quote">Request a Quote</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start h-full items-start gap-3.5">
          {/* Enter requested query */}
          <div className="h-full w-full">
            <div className="text-body-1 font-medium">
              Enter requested query
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <textarea className="border-1 w-full h-[93%]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-secondary w-full mt-9 text-white px-4 py-2 rounded-md hover:cursor-pointer">
          <span className="text-h5 font-medium">Submit</span>
        </button>
      </div>
    </>
  );
};

export default Form;
