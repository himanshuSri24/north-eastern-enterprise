import React from "react";

const cardData = [
  {
    title: "We Bridge the Gap Between Need and Access",
    description:
      "Our vision is to ensure no hospital, clinic, or caregiver ever faces a shortage during critical moments. We exist so that supply never fails where care is needed most.",
  },
  {
    title: "We Deliver More Than Products — We Deliver Readiness",
    description:
      "Every surgical tool we provide is a piece of someone's survival story. Our mission is to be the silent strength behind every successful operation and emergency response.",
  },
  {
    title: "We Believe in Speed, Safety & Systematic Delivery",
    description:
      "Healthcare doesn't wait — and neither do we. Our logistics and quality assurance systems are built to move fast, stay safe, and meet the standards our partners trust.",
  },
  {
    title: "We're Rooted in Care, Not Just Commerce",
    description:
      "We don't just distribute — we serve with purpose. Our mission is guided by compassion, not just contracts. Because behind every order is a patient depending on it.",
  },
];

const renderCard = (card: (typeof cardData)[number]) => {
  return (
    <div className="flex flex-col gap-11 bg-[#CFDDE9] text-black text-start py-18 px-15">
      <div className="text-h2 font-bold leading-[120%]">{card.title}</div>
      <div className="text-h4 font-bold leading-[120%]">{card.description}</div>
    </div>
  );
};

const WhyNEE = () => {
  return (
    <>
      <div className="flex flex-col gap-5 bg-grey my-6 mx-16 rounded-[20px] py-14 px-5 text-center">
        <div className="text-h1 font-bold text-primary">
          Why North Eastern Enterprise?
        </div>
      </div>
      <div
        className="text-h1 font-bold text-primary grid grid-cols-2 pt-20 pb-40 gap-y-11 gap-x-21 px-17"
        style={{
          backgroundImage: "url('/pharmaBackground.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {cardData.map(renderCard)}
      </div>
    </>
  );
};

export default WhyNEE;
