import React from "react";
import TitleTextCard from "./TitleTextCard";
import FooterCard from "./FooterCard";

const footerData = [
  {
    title: "Product",
    links: [
      { item: "Overview" },
      { item: "Features" },
      { item: "Solutions" },
      { item: "Tutorial" },
      { item: "Pricing" },
      { item: "Releases" },
    ],
  },
  {
    title: "Company",
    links: [
      { item: "About Us" },
      { item: "Careers" },
      { item: "Press" },
      { item: "News" },
      { item: "Media Kit" },
      { item: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { item: "Blog" },
      { item: "Newsletter" },
      { item: "Events" },
      { item: "Help Center" },
      { item: "Tutorial" },
      { item: "Support" },
    ],
  },
  {
    title: "Use Case",
    links: [
      { item: "Startups" },
      { item: "Enterprise" },
      { item: "Government" },
      { item: "SaaS Center" },
      { item: "Marketplace" },
      { item: "Ecommerce" },
    ],
  },
  {
    title: "Social",
    links: [
      { item: "Twitter" },
      { item: "LinkedIn" },
      { item: "Facebook" },
      { item: "GitHub" },
      { item: "AngelList" },
      { item: "Dribble" },
    ],
  },
  {
    title: "Legal",
    links: [
      { item: "Terms" },
      { item: "Privacy" },
      { item: "Cookies" },
      { item: "Licenses" },
      { item: "Settings" },
      { item: "Contact" },
    ],
  },
];

function Footer() {
  return (
    <div className="flex flex-col pt-14 bg-bg" >
      <TitleTextCard
        title={"Start your free trial"}
        text1={"Join over 4,000+ startups already growing with Untitled."}
        size={"text-2xl"}
      />
      <div className="flex flex-col-reverse md:flex-row md:space-x-6 items-center justify-center  md:space-y-0 pt-5 px-4 pb-2">
        <button className="w-full md:w-auto border-gray-300 border-2 p-2 rounded-lg text-grey hover:font-medium transition duration-500 ease-in-out text-sm mb-4 md:mb-0">
          Learn More
        </button>
        <button className="w-full md:w-auto rounded-lg p-2 bg-purple text-white hover:bg-mediumPurple transition duration-500 ease-in-out text-sm mb-4 md:mb-0">
          Get Started
        </button>
      </div>
      <div className="pt-16 pl-4 pr-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 items-start justify-center border-b-2 border-gray-200 pb-10 gap-6 bg-white">
        {footerData.map((data, index) => (
          <FooterCard key={index} data={data} />
        ))}
      </div>
      <br />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:items-center justify-between pt-4 pb-10 px-4">
        <div className="flex flex-row space-x-2 items-center">
          <button className="cursor-default">
            <img src="logo.svg" alt="logo" className="w-8 h-8" />
          </button>
          <h1 className="text-sm font-medium">Untitled UI</h1>
        </div>
        <p className="text-grey text-xs font-light">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
