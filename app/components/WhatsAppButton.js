import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
export default function WhatsAppButton() {
  return (
    <div className="z-50 leading-[18px] font-[400] text-[15px] fixed bottom-[10%] right-4  text-[#000] text-center flex items-center  justify-center gap-[19px] underline cursor-pointer">
      <div className="flex justify-center">
        <Link
          href="https://wa.me/2349055645316"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center flex-col items-center gap-[.5rem] md:gap-[10px] md:flex-row">
            <FaWhatsapp className="p-2 text-5xl text-white rounded-full shadow-lg bg-[#0EA01D]" />
            <div className="flex flex-col items-start justify-center text-container">
              <div>Need help?</div>
              <div>Chat with Us</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

