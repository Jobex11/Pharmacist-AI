"use client";
import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-between py-2 text-sm cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between w-full">
          <div className="text-[18px] leading-[30px]">{question}</div>
          <div>{isOpen ? <RxCaretUp size={24} /> : <RxCaretDown size={24} />}</div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-gray-600 text-[17px] leading-[30px]">{answer}</p>
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
        className="flex flex-col items-center justify-between py-2 text-sm cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between w-full">
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
