import React from "react";

export enum BannerType {
  HOME = "HOME",
  VISION_MISSION = "VISION_MISSION",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
  AUTHORISED_BRANDS = "AUTHORISED_BRANDS",
  CONTACT_US = "CONTACT_US",
  DRUG_LICENSES = "DRUG_LICENSES",
}

interface BannerProps {
  bannerType: BannerType;
}

const Banner = ({ bannerType: page }: BannerProps) => {
  if (page === BannerType.HOME) {
    return (
      <div className="flex flex-col p-6 text-center mob:text-start mob:p-16 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59] sm:py-23">
        <div className="text-title-1 mob:text-h3 sm:text-h2 md:text-h1 text-white font-bold leading-[120%]">
          Trusted Surgical Goods Distributer <br /> in North-East India
        </div>
        <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
          Serving hospitals, clinics and government bodies since 1995
        </div>
      </div>
    );
  } else if (page === BannerType.VISION_MISSION) {
    return (
      <div className="flex flex-col p-6 mob:p-16 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59] sm:py-23">
        <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium text-center mob:px-4 md:px-16 lg:px-64">
          North Eastern Enterprise is a trusted surgical distribution firm based
          in Northeast India, serving hospitals, clinics, and public health
          institutions for over 25 years. With precision in distribution and
          passion in service, we ensure critical surgical goods reach those who
          need them — on time, every time. Our mission is simple yet vital: to
          strengthen healthcare delivery by being the most reliable link in the
          supply chain. Backed by deep expertise and long-standing
          relationships, we are proud to be a partner in saving lives — one
          delivery at a time.
        </div>
      </div>
    );
  } else if (page === BannerType.AUTHORISED_BRANDS) {
    return (
      <div className="flex flex-col px-6 py-15 text-center mob:p-16 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59] sm:py-23">
        <div className="text-title-1 mob:text-h3 sm:text-h2 md:text-h1 text-white font-bold leading-[120%]">
          Working with best Clients and Partners.
        </div>
      </div>
    );
  } else if (page === BannerType.CONTACT_US) {
    return (
      <div className="flex flex-col px-6 py-12.5 text-center mob:p-16 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59] sm:py-23">
        <div className="text-title-1 mob:text-h3 sm:text-h2 md:text-h1 text-white font-bold leading-[120%]">
          Whether you&apos;re looking to partner, place an order, or just have
          questions — we&apos;re here.
        </div>
      </div>
    );
  } else if (page === BannerType.DRUG_LICENSES) {
    return (
      <div className="flex flex-col py-5 mt-6 mob:px-32 gap-10 bg-gradient-to-r from-[#010109] to-[#041E59]">
        <div className="grid grid-cols-1 desk-1:grid-cols-3 gap-4 w-full whitespace-nowrap">
          {/* Column 1 */}
          <div className="flex justify-center desk-1:justify-start gap-20">
            <div className="flex flex-col items-center text-left">
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                Drug License
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-end text-right">
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                DL-DJ-4229-SW&nbsp;&nbsp;(20B)
              </div>
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                DL-DJ-4230-SBW (21B)
              </div>
            </div>
          </div>

          {/* Column 3 - Empty */}
          <div></div>

          {/* Column 5 */}
          <div className="flex justify-center desk-1:justify-end gap-20">
            <div className="flex flex-col items-start text-left">
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                Narcotics License
              </div>
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                Food License
              </div>
            </div>

            {/* Column 6 */}
            <div className="flex flex-col items-end text-right">
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                178-01/2022-23
              </div>
              <div className="text-body-1 sm:text-title-1 md:text-h5 text-white font-medium">
                12820006000171
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Banner;
