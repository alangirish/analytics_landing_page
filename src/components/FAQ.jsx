import React, { useState } from "react";
import TitleTextCard from "./TitleTextCard";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 p-4 space-y-6">
      <TitleTextCard
        title={"Frequently asked questions"}
        text1={"Everything you need to know about the product and billing."}
        size={"text-2xl"}
      />
      <div className="flex items-center justify-center w-full max-w-[768px]">
        <div className="w-full p-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-medium text-grey">{item.question}</h3>
                <div>
                  {openIndex === index ? (
                    <RemoveCircleOutlineOutlinedIcon className="text-gray-500" />
                  ) : (
                    <AddCircleOutlineOutlinedIcon className="text-gray-500" />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <p className="text-grey font-light text-sm pt-2">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center pt-2 bg-bg rounded-lg w-full">
        <div className="flex-col items-center justify-center space-y-2">
          <div className="pt-2 flex items-center justify-center">
            <img src="avatargroup.png" alt="" className="max-w-full" />
          </div>
          <div className="flex items-center justify-center pt-2">
            <h2 className="font-medium">Still have questions?</h2>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-grey text-sm text-center px-4">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
          </div>
          <div className="flex items-center justify-center p-4">
            <button className="bg-purple text-white rounded-lg p-2 text-sm hover:bg-mediumPurple transition duration-500 ease-in-out">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
