import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppButton() {
  return (
    <div className="z-50 md:hidden text-base fixed bottom-[10%] right-4 text-primary text-center flex-col items-center  justify-center">
      <div>chat with us</div>

      <div className="flex justify-center">
        <Link
          href="https://wa.me/2349055645316"
          className=" "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className=" text-5xl bg-primary text-white p-2 rounded-full shadow-lg" />
        </Link>
      </div>
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
