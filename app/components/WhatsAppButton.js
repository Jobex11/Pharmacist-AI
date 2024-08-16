import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppButton() {
  return (
    <div>
      <Link
        href="https://wa.me/your-phone-number"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
/*
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/your-phone-number"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

*/
