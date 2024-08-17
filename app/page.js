import Link from "next/link";
import Image from "next/image";
import { FaArrowUp, FaArrowDown, FaArrowRight } from "react-icons/fa";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* nav content */}
      {/* first content */}
      <div className="flex flex-col items-center py-10 bg-custom-bg-1 ">
        <h1 className="px-2 md:px-0 text-base md:text-3xl md:w-[600px] text-gray-200 mt-12 text-center">
          Connect with Expert Pharmacists Anytime, Anywhere with FloglogPharma
        </h1>
        <h4 className="px-2 m-2 md:m-4 text-sm md:text-base md:w-[600px] text-gray-400  text-center">
          Experience Premium Pharmaceutical Care on your mobile. Refill
          medications easily, and lots more.
        </h4>
        <div className=" w-[95%]  md:w-[40%] flex justify-center items-center flex-row m-4 h-[300px] md:h-[400px]">
          <div className="flex flex-col justify-center h-full w-[60%] mr-[-60px] z-0">
            <Image
              width={100}
              height={100}
              unoptimized={true}
              src="/Group6321.png"
              className="h-[80%] w-full"
            />
          </div>
          <div className="flex flex-col justify-center w-[40%] h-full">
            <Image
              width={100}
              height={100}
              unoptimized={true}
              src="/Maskgroup.png"
              className="h-[50%] object-cover w-full rounded-lg"
            />
            <Image
              width={100}
              height={100}
              unoptimized={true}
              src="/Group6322.png"
              className="h-[50%] object-cover w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* second content */}
      <div className="bg-custom-bg-cyan text-[#0C4E86]   w-full py-10 flex flex-col items-center">
        <h1 className=" w-[300px] md:w-[600px]  text-xl md:text-3xl font-semibold text-center my-0 md:my-2">
          We guarantee you the CAPS of healthcare
        </h1>
        <div className="mt-3 md:flex md:mt-6 mx-7 md:mx-14 md:space-x-8">
          <div className="flex-1 ">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              C
            </div>
            <h3 className="text-base font-semibold">Convenience</h3>
            <h4 className="text-sm">
              We offer easy online appointment scheduling, telemedcine options
              for remote consultations, and a streamlined processes to reduce
              wait ties.
            </h4>
          </div>
          <div className="flex-1 ">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              A
            </div>
            <h3 className="text-base font-semibold">Accessibility</h3>
            <h4 className="text-sm">
              We provide multi-channel support for consultations (chat and
              video) and we also accomodate diverse schedules.
            </h4>
          </div>
          <div className="flex-1 ">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              P
            </div>
            <h3 className="text-base font-semibold">Privacy</h3>
            <h4 className="text-sm">
              We schedule consultation appointment promptly and minimize wait
              times. We deliver medications swiftly and promptly.
            </h4>
          </div>
          <div className="flex-1">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              S
            </div>
            <h3 className="text-base font-semibold">Speed</h3>
            <h4 className="text-sm">
              We schedule consultation appointments promptly and minimize wait
              times. We deliver medications swiftly and promptly
            </h4>
          </div>
        </div>
        <hr className="border-[#0B3D7929] my-5 md:my-10 h-1 w-full"></hr>
        <div className="px-5 mx-2 md:px-0">
          <h1 className="md:w-[600px]  text-xl md:text-3xl font-semibold md:text-center">
            Maximize Your Medication Safety and Convenience with FloglogPharma.
          </h1>
          <h3 className="md:w-[600px]  text-base md:text-center my-3">
            Safely manage your medications and simplify your healthcare routine
            with Flologpharma's innovative solutions
          </h3>
          <div className="flex items-center justify-center md:text-center">
            <Link href="/contact">
              <button className="flex items-center justify-center gap-1 p-2 my-4 text-sm bg-gray-200 rounded-lg cursor-pointer text-primary hover:bg-gray-100 hover:transition-all">
                Get started
                <FaArrowRight className="text-primary" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* third content -> solutions */}
      <div className="flex flex-col items-center justify-center w-full h-auto p-10 text-primary">
        <h5 className="my-2 text-base font-bold md:my-6">OUR SOLUTION</h5>
        <div className="md:flex md:w-[50%] justify-center items-center md:space-x-5 md:h-[400px] my-6">
          <div className="bg-custom-bg-2 md:w-[60%] md:h-full flex justify-center items-end rounded-xl">
            <Image
              src="/images/Image[img-feature-lg].png"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
          <div className="md:w-[40%] px-0 py-2  md:py-0">
            <h3 className="text-xl font-semibold md:text-2xl md:font-normal">
              Consult a Pharmacist
            </h3>
            <h5 className="mt-1 text-lg md:text-sm">
              Experience the flexibility of remote pharmaceutical consulations,
              24/7. Get trusted consultation guidance and support from our team
              of pharmacists, anytime, anywhere.
            </h5>
          </div>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:w-[50%] justify-center items-center md:space-x-5 md:h-[400px ] my-2 md:my-6">
          <div className=" order-2 md:order-1 md:w-[40%] px-0 md:px-3">
            <h3 className="py-4 text-xl font-semibold md:font-normal md:text-2xl md:py-0">
              Manage your medications use with ease
            </h3>
            <h5 className="mt-1 text-lg md:text-sm">
              Keeping track of your medications should'nt be complicated. Our
              app streamlines the process, allowing you to effortlessly
              organize, schedule, and monitor your medication intake.Take
              control of your health journey with simplicity and peace of mind.
            </h5>
          </div>
          <div className="order-1 md:order-2 bg-custom-bg-2 md:w-[60%] md:h-full flex justify-end items-end rounded-xl">
            <Image
              src="/Layer_1.png"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
        </div>
        <div className="md:flex md:w-[50%] justify-center items-center md:space-x-5 md:h-[400px] my-3 md:my-6">
          <div className="bg-custom-bg-3 md:w-[60%] md:h-full flex justify-center items-end rounded-xl">
            <Image
              src="/Layer_2.png"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
          <div className="md:w-[40%] px-0 my-2 md:my-0 md:px-3">
            <h3 className="text-xl font-semibold md:font-normal md:text-2xl">
              Order your prescriptions and OTCs
            </h3>
            <h5 className="mt-1 text-lg md:text-sm">
              Say goodbye to long queses! With our app you can effortlessly
              request over-the-counter medications from the comfort of your own
              home. Browse, select, and order with just a few taps.
            </h5>
          </div>
        </div>
      </div>
      {/* fourth content */}
      <div className="bg-[#F0F7FF] px-6 md:px-0 text-primary py-4 md:py-7 md:h-auto flex  flex-col justify-center items-center">
        <h2 className="font-semibold text-xl md:text-2xl md:w-[40%] text-start md:text-center">
          Take an advantage of the Senior Citizens Care Program (SECCAP)
        </h2>
        <h4 className=" md:px-0 text-lg md:text-sm my-2 md:my-6 md:w-[40%]">
          SECCAP is a comprehensive healthcare solution designed to support the
          well-being of the elderly in our communities.
        </h4>
        <Link href="/contact">
          <div className="flex items-center justify-center gap-1 p-2 my-4 text-sm bg-gray-200 rounded-lg cursor-pointer text-primary hover:bg-gray-100 hover:transition-all">
            Get started
            <FaArrowRight className="text-primary" />
          </div>
        </Link>

        <div className="md:w-[70%] md:h-[60%]">
          {/*text drop sided big image*/}
          {/*
          
          
          <div className="text-xs bg-gray-200 p-2 w-[30%] rounded-md relative top-0">
            Convenient home delivery of medications, saving you time and effort
          </div>
          <div className="text-xs bg-gray-200 p-2 w-[30%] rounded-md">
            Get uninterrupted monthly medication refills for your elderly
          </div>
          <div className="text-xs bg-gray-200 p-2 w-[30%] rounded-md">
            Access to qualified Clinical Pharmacists for expert guidance and
            support, whenever and wherever needed
          </div>
          */}
          <Image
            src="/Rectangle87.png"
            height={100}
            width={100}
            quality={100}
            unoptimized={true}
            className="w-full h-full"
          />
        </div>
        <div className=" hidden md:flex md:space-x-4 md:my-4 md:w-[70%] md:h-[200px]">
          <div className="flex-1">
            <Image
              src="/Rectangle89.png"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 ">
            <Image
              src="/Rectangle90.png"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="w-full h-full"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/Rectangle91.png"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* fifth content  healthcare tips*/}
      <div className="items-center md:h-screen md:flex">
        <div className="bg-gradient-to-b from-[#0C4E86] to-[#031320] my-2 md:my-16 flex flex-col text-white justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center px-3 my-2 text-center md:my-6">
            <h3 className="my-4 text-xl font-semibold md:text-2xl">
              Healthcare at Your fingertip
            </h3>
            <h6 className="text-sm md:text-base md:w-[50%]">
              In 15 months, we've made significant strides in becoming a trusted
              healthcare partner to
            </h6>
          </div>
          <div className="items-center justify-center hidden gap-6 my-6 md:flex">
            <div className="flex-1 px-8 py-5 border border-gray-200 rounded-full">
              <h3 className="text-2xl">Over 100</h3>
              <h6 className="text-xs">Pharmacies across Nigeria</h6>
            </div>
            <div className="flex-1 px-8 py-5 border border-gray-200 rounded-full">
              <h3 className="text-2xl">Over 50</h3>
              <h6 className="text-xs">Hospitals across Nigeria</h6>
            </div>
            <div className="flex-1 px-8 py-5 border border-gray-200 rounded-full">
              <h3 className="text-2xl">Over 5,000</h3>
              <h6 className="text-xs">Patients across Nigeria</h6>
            </div>
            <div className="flex-1 px-8 py-5 border border-gray-200 rounded-full">
              <h3 className="text-2xl">Over 10,000</h3>
              <h6 className="text-xs">Healthcare providers across Nigeria</h6>
            </div>
          </div>
        </div>
      </div>
      {/* sixth content faq */}
      <div className="bg-gradient-to-tr from-[#FEFFFF] to-[#A9DBFF] my-3 md:my-14 p-4 md:p-12 text-primary">
        <h6 className="py-2 font-semibold md:xl md:text-2xl md:py-4">
          Frequently asked questions
        </h6>
        <h3 className="py-2 text-sm font-semibold md:text-lg md:py-4">
          Everything you need to know
        </h3>
        <h6 className="py-2 text:sm md:text-lg md:py-4">
          Discover helpful information about our services and patient care in
          our FAQ library
        </h6>
        {/* faq components*/}
        <FAQ />
        <h5 className="py-3 text-xs md:py-6">
          If you have anything else you want to ask,
          <Link href="/" className="font-bold">
             &nbsp;reach out to us.
          </Link>
        </h5>
      </div>

      <div>
        {/* faq footer*/}
        <div className="flex-col items-center justify-center w-full mb-4 md:flex md:mb-6">
          <div className="p-3 md:p-0 text-sm  md:flex justify-center items-stretch md:w-[70%] gap-5">
            <div className="flex-1 p-3 my-2 md:my-0 bg-custom-bg-4 md:p-7 rounded-xl">
              <div className="w-[25px] h-[25px]">
                <Link href="https://chat.whatsapp.com/IeKaaoCxj2612rlCbOpXM5">
                  <Image
                    src="/whatsap.svg"
                    height={100}
                    width={100}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <h5 className="py-2 font-bold text-gray-200 ">Stay up to date</h5>
              <h6 className="text-gray-300">
                Stay informed and engaged with our latest news, updates, and
                insights {/**/}
                <Link
                  href="https://chat.whatsapp.com/IeKaaoCxj2612rlCbOpXM5"
                  className="text-gray-100 underline"
                >
                  by joining our WhatsApp community
                </Link>
                . We value your connection
              </h6>
            </div>
            <div className="flex-1 p-3 my-2 md:my-0 bg-custom-bg-5 md:p-7 rounded-xl ">
              <div className="w-[25px]  h-[25px]">
                <Link href="https://www.instagram.com/flologpharma.co">
                  <Image
                    src="/instagram.svg"
                    height={100}
                    width={100}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <h5 className="py-2 font-bold text-gray-200 ">Stay up to date</h5>
              <h6 className="text-gray-300">
                We’d love to stay connected with you. If the feeling’s mutual,
                follow{" "}
                <Link
                  href="https://www.instagram.com/flologpharma.co"
                  className="text-gray-100 underline"
                >
                  @flologpharma's.com
                </Link>{" "}
                on Instagram for the latest news and updates.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
