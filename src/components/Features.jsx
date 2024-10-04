import React from "react";
import TitleTextCard from "./TitleTextCard";
import FeaturesCard from "./FeaturesCard";

function Features() {
  return (
    <div className="flex flex-col items-center pt-24 p-4">
      <div className="flex items-center justify-center pt-5">
        <h1 className="text-mediumPurple text-2xl">Features</h1>
      </div>
      <TitleTextCard
        title={"Analytics that feels like it's from the future"}
        text1={
          "Powerful, self-serve product and growth analytics to help you convert, engage,"
        }
        text2={" and retain more users. Trusted by over 4,000 startups."}
        size={"text-2xl text-center"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 md:p-12">
        <FeaturesCard
          img={"Icon.svg"}
          title="Share team inboxes"
          text1="Whether you have a team of 2 or 200, our shared"
          text2={"inboxes keep everyone on the same page"}
          text3={"and in the loop."}
        />
        <FeaturesCard
          img={"Icon-1.svg"}
          title="Deliver instant answers"
          text1="An all-in-one customer service platform that helps"
          text2="you balance everything your customers need to be"
          text3="happy."
        />
        <FeaturesCard
          img={"Icon-2.svg"}
          title="Manage your team with reports"
          text1="Measure what matters with Untitled's easy-to-use "
          text2="reports. You can filter, export, and drilldown on the "
          text3="data in a couple clicks."
        />
        <FeaturesCard
          img={"Icon-3.svg"}
          title="Connect with customers"
          text1="Solve a problem or close a sale in real-time with "
          text2="chat. If no one is available, customers are "
          text3="seamlessly routed to email without confusion."
        />
        <FeaturesCard
          img={"Icon-4.svg"}
          title="Connect the tools you already use"
          text1="Explore 100+ integrations that make your"
          text2="day-to-day workflow more efficient and familiar."
          text3="Plus, our extensive developer tools."
        />
        <FeaturesCard
          img={"Icon-5.svg"}
          title="Our people make the difference"
          text1="We're an extension of your customer service team, "
          text2="and all of our resources are free. Chat to our"
          text3="friendly team 24/7 when you need help."
        />
      </div>
    </div>
  );
}

export default Features;
