import React, { useState } from "react";
import { questions } from "../constants";
import Accordion from "./Accordion";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-col w-full  lg:px-10 rounded-3xl">
      <div className="flex mb-[5rem] mt-[6rem] justify-center items-center w-full text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-text-gradient ">
          Ask Quick Questions
        </h1>
      </div>
      <div className="flex flex-col gap-6 ">
        {questions.map((item, index) => (
          <Accordion
            key={item.id}
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
