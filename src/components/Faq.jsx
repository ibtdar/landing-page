import React, { useState } from 'react';
import arrow from "../../src/assets/arrow-down.svg";
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3">
      <div className={`bg-[#F3F5F9] flex items-start gap-x-3 justify-between rounded py-3 px-5 ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
        <h3 className='font-medium leading-5'>{question}</h3>
         <div className="bg-yellow p-2 rounded"><img className={`${isOpen ? 'rotate-180' : ''}`} src={arrow} alt="" /></div>
      </div>
      {isOpen && <div className="p-4 text-black text-opacity-70">{answer}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="mt-6 sm:mt-10">
      {items.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Accordion;
