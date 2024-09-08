import Accordion from "./Accordion";

const FAQ = ({ count = 10 }) => {
  const faqs = [
    {
      question: "What are your services?",
      answer:
        "We connect patients to pharmacists on our platform, we also carry out doorstep delivery of medication orders.",
    },
    {
      question:
        "Can I get a pharmacist that will attend to me immediately on your platform?",
      answer: "Yes, we provide quick response.",
    },
    {
      question: "Can I consult a pharmacist physically?",
      answer: "Yes, you can consult with a pharmacist physically.",
    },
    {
      question: "How can I book a physical appointment?",
      answer:
        "To book a physical appointment, download the app, go to book an appointment then select your preferred location, payments validate appointment booking.",
    },
    {
      question: "How much does an online consultation cost?",
      answer: "Online consultation costs 1 token per session (T&Cs applied).",
    },
    {
      question: "Can I follow up with my pharmacist after the consultation?",
      answer:
        "Yes, you can follow up with your pharmacist after every consultation.",
    },
    {
      question: "Can my Flolog platform account serve my whole family?",
      answer: "Yes, it can.",
    },
    {
      question: "Can I order prescription medications from your platform?",
      answer: "Yes, a valid doctor’s prescription must be presented.",
    },
    {
      question: "Can I order over the counter medications from your platform?",
      answer: "Yes, over the counter medications can be ordered.",
    },
    {
      question:
        "Can I order dietary, beauty and skincare supplements from your platform?",
      answer:
        "Yes, orders can be placed for dietary, beauty, and skincare supplements.",
    },
    {
      question:
        "How fast can my medications ordered from Flolog platform be delivered to me?",
      answer:
        "Our delivery chain runs from 1-24hrs (same day delivery after payment).",
    },
    {
      question:
        "Can I consult a pharmacist on Flolog platform from anywhere in the world?",
      answer: "Yes, our pharmacist can be reached from anywhere in the world.",
    },
    {
      question:
        "Can Flolog deliver medications and supplements outside Nigeria?",
      answer:
        "Yes, we deliver medications to any part of the world (T&Cs applied).",
    },
    {
      question: "Is my personal and medical information safe and secure?",
      answer: "Yes, every information is secured.",
    },
  ];

  // Slice the FAQs based on the count
  const displayedFaqs = faqs.slice(0, count);

  return (
    <div className="faq-container">
      {displayedFaqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
