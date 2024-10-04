import React from "react";
import TitleTextCard from "./TitleTextCard";
import FeaturesCard from "./FeaturesCard";

function Features2() {
  return (
    <div className="flex-col pt-20 p-4">
      <div className="flex items-center justify-center pt-5">
        <div className="border-2 p-1 border-lightPurple text-mediumPurple text-xs font-light rounded-full flex items-center space-x-2">
          <button className="pr-1 pl-1 rounded-full">Features</button>
        </div>
      </div>
      <TitleTextCard
        title="Cutting-edge features for advanced analytics"
        text1="Powerful, self-serve product and growth analytics to help you convert, engage, "
        text2="and retain more users. Trusted by over 4,000 startups."
        size="text-2xl"
      />
      <div className="flex items-center justify-center">
        <img src="Content.png" alt="Desktop view" className="max-w-full hidden md:block" />
        <img src="iphone.png" alt="Mobile view" className="max-w-full md:hidden" />
      </div>
      <div className="flex items-center justify-center pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex-col items-center justify-center">
            <FeaturesCard
              img={"Icon.svg"}
              title="Share team inboxes"
              text1="Whether you have a team of 2 or 200, our shared"
              text2={"inboxes keep everyone on the same page"}
              text3={"and in the loop."}
            />
            <div className="flex items-center justify-center pt-4">
              <button className="text-mediumPurple items-center">
                Learn More →
              </button>
            </div>
          </div>
          <div className="flex-col items-center justify-center">
            <FeaturesCard
              img={"Icon-1.svg"}
              title="Deliver instant answers"
              text1="An all-in-one customer service platform that helps"
              text2="you balance everything your customers need to be"
              text3="happy."
            />
            <div className="flex items-center justify-center pt-4">
              <button className="text-mediumPurple items-center">
                Learn More →
              </button>
            </div>
          </div>
          <div className="flex-col items-center justify-center">
            <FeaturesCard
              img={"Icon-2.svg"}
              title="Manage your team with reports"
              text1="Measure what matters with Untitled's easy-to-use "
              text2="reports. You can filter, export, and drill down on the "
              text3="data in a couple clicks."
            />
            <div className="flex items-center justify-center pt-4">
              <button className="text-mediumPurple items-center">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features2;