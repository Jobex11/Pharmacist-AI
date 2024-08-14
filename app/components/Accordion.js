"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex flex-col justify-between items-center cursor-pointer text-sm py-2"
        onClick={toggleAccordion}
      >
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">{question}</div>
          <div>{isOpen ? <FaMinus /> : <FaPlus />}</div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-sm text-gray-600">{answer}</p>
      </div>

      <hr className="border-[#0B3D7929] my-1 md:my-6 h-1 w-full" />
    </div>
  );
};

export default Accordion;

/*
"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex  flex-col justify-between items-center cursor-pointer text-sm py-2"
        onClick={toggleAccordion}
      >
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">{question}</div>
          <div>{isOpen ? <FaMinus /> : <FaPlus />}</div>
        </div>
      </div>

      <div>
        {isOpen && <p className="mt-2 text-sm text-gray-600">{answer}</p>}
      </div>
      <hr className="border-[#0B3D7929] my-1 md:my-6 h-1 w-full" />
    </div>
  );
};

export default Accordion;

*/
