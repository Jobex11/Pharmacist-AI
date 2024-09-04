"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FAQ from "./components/FAQ";
import { poppins } from "./layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const images = [
    "/Rectangle89.png",
    "/Rectangle90.png",
    "/Rectangle89.png",
    "/Rectangle90.png",
    "/Rectangle91.png",
    "/Rectangle91.png",
    "/Rectangle91.png",
    "/Rectangle89.png",
    "/Rectangle90.png",
  ];

  return (
    <div className={`w-full overflow-hidden ${poppins.className}`}>
      {/* nav content */}
      {/* first content */}
      <div className="flex flex-col items-center py-14 bg-custom-bg-1 bg-stripe md:py-20">
        {/* <h1 className="px-2 md:px-0 text-base md:text-3xl md:w-[600px] text-gray-200 mt-12 text-center"> */}
        <h1 className="px-2 mt-12 text-base text-center text-white text-header md:px-0">
          Connect with Expert Pharmacists Anytime, Anywhere with FlologPharma
        </h1>
        {/* <h4 className="px-2 m-2 md:m-4 text-sm md:text-base md:w-[600px] text-gray-400  text-center"> */}
        <h4 className="px-2 m-2 text-center text-white text-desc md:m-4 md:pt-[1.2rem] md:pb-[2rem]">
          Experience Premium Pharmaceutical Care on your mobile. Refill
          medications easily, and lots more.
        </h4>
        {/* <div className=" w-[95%]  md:w-[40%] flex justify-center items-center flex-row m-4 h-[300px] md:h-[400px]"> */}
        {/* <div className="img-container flex justify-center items-center flex-row m-4 h-[300px] md:h-[400px]"> */}
        <div className="flex flex-row items-center justify-center m-4 img-container">
          <div className="md:mt-[-3rem] z-0 flex flex-col justify-center">
            {/* <div className="flex flex-col justify-center h-full w-[60%] mr-[-60px] z-0"> */}
            <Image
              width={100}
              height={100}
              unoptimized={true}
              //  src="/left-header-img.svg"
              src="/Group6321.png"
              className="h-[80%] w-full"
            />
          </div>
          {/* <div className="flex flex-col justify-center w-[40%] h-full"> */}
          <div className="flex flex-col justify-center img-right">
            <Image
              width={100}
              height={100}
              unoptimized={true}
              src="/Maskgroup.png"
              className="object-cover w-full rounded-lg"
              // className="h-[50%] object-cover w-full rounded-lg"
            />
            <Image
              width={100}
              height={100}
              unoptimized={true}
              src="/Group6322.png"
              className="object-cover w-full rounded-lg md:mt-[-1.3rem] mt-[-.5rem]"
              // className="h-[50%] object-cover w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* third content -> solutions */}
      <div className="solution-section md:gap-[5rem] md:pt-[5rem] gap-[3rem] flex flex-col items-center justify-center w-full md:w-[70%] md:mx-auto h-auto p-10 text-primary">
        {/* <h5 className="my-2 text-base font-bold md:my-6">OUR SOLUTION</h5> */}
        <div className="items-center justify-center my-6 gap-[2rem] md:flex md:space-x-5">
          {/* <div className="md:flex md:w-[50%] justify-center items-center md:space-x-5 md:h-[400px] my-6"> */}
          <div className="bg-custom-bg-2 md:w-[58%] md:h-[600px] flex justify-center items-end rounded-xl">
            <Image
              src="/consult-pharm.svg"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
          <div className="pt-7 x-0 md:py-0 md:w-[42%] sm:pt-2">
            {/* <div className="md:w-[40%] px-0 py-2  md:py-0"> */}
            <h3 className="text-xl font-semibold  md:text-2xl md:w-[75%] md:mb-[1rem] md:text-[35px] md:leading-[38px] md:font-[300] text-black ">

              Consult a Pharmacist
            </h3>
            <h5 className="mt-1 text-lg md:font-inter md:text-16-5 md:font-400 md:leading-24 md:tracking-negative-0-18 md:text-left text-[#262729]">
            Experience the flexibility of remote pharmaceutical consultations, 24/7. Get trusted consultation guidance and support from our team of pharmacists, anytime, anywhere.
            </h5>
          </div>
        </div>
        <div className="items-center gap-[2rem] justify-center my-3 md:flex md:space-x-5 md:my-6 flex flex-col-reverse md:flex-row">
          {/* <div className="md:flex md:w-[50%] justify-center items-center md:space-x-5 md:h-[400px] my-3 md:my-6"> */}
          <div className="md:w-[42%] px-0 my-2 md:my-0 md:px-3">
            {/* <div className="md:w-[40%] px-0 my-2 md:my-0 md:px-3"> */}
            <h3 className="text-xl font-semibold  md:text-2xl md:w-[75%] md:mb-[1rem] md:text-[35px] md:leading-[38px] md:font-[300] text-black ">
              Order your prescriptions and OTCs
            </h3>
            <h5 className="mt-1 text-lg md:font-inter md:text-16-5 md:font-400 md:leading-24 md:tracking-negative-0-18 md:text-left text-[#262729]">
            Say goodbye to long queues! With our app, you can effortlessly request over-the-counter medications from the comfort of your own home. Browse, select, and order with just a few taps.
            </h5>
          </div>
          <div className="bg-custom-bg-3 md:w-[58%] md:h-[600px] flex justify-center items-end rounded-xl">
            <Image
              src="/order-presc.svg"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[2rem] md:flex md:flex-row justify-center items-center md:space-x-5 md:h-[400px ] my-2 md:my-6">
          <div className="order-1  bg-custom-bg-2 md:w-[58%] md:h-[600px] flex justify-end items-end rounded-xl">
            {/* <div className="order-1 md:order-2 bg-custom-bg-2 md:w-[50%] md:h-full flex justify-end items-end rounded-xl"> */}
            <Image
              src="/manage-med.svg"
              height={100}
              width={100}
              quality={100}
              unoptimized={true}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
          <div className=" order-2 md:order-1 md:w-[42%] px-0 md:px-3">
            <h3 className="py-4 pb-0 text-xl font-semibold md:py-0 md:text-[35px] md:leading-[38px] md:font-[300] text-black md:w-[75%] md:mb-[1rem]">
              Manage your medications use with ease
            </h3>
            <h5 className="mt-1 text-lg md:font-inter md:text-16-5 md:font-400 md:leading-24 md:tracking-negative-0-18 md:text-left text-[#262729]">
            Keeping track of your medications shouldn&apos;t be complicated. Our app streamlines the process, allowing you to effortlessly organize, schedule, and monitor your medication intake. Take control of your health journey with simplicity and peace of mind.
            </h5>
          </div>
        </div>
      </div>

      {/* second content */}
    <div className="section2-container">
    <div className="w-[94%] md:w-[95%] rounded-[25px] guarantee-section bg-custom-bg-cyan text-[#0C4E86] md:pt-[4rem] md:mt-[4rem] mx-auto py-10 flex flex-col items-center">
        <h1 className=" w-[300px] md:w-[600px]  text-xl md:text-3xl font-semibold text-center my-0 md:my-2">
          We guarantee you the CAPS of healthcare
        </h1>
        <div className="flex flex-col gap-8 mt-3 md:flex md:mt-6 mx-7 md:mx-14 md:space-x-8 md:flex-row">
          <div className="flex flex-col flex-1 gap-2">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              C
            </div>
            <h3 className="text-[20px] font-semibold">Convenience</h3>
            <h4 className="text-[15px] leading-[25px]">
            We offer easy online appointment scheduling, telemedicine options for remote consultations, and a streamlined processes to reduce wait times.
            </h4>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              A
            </div>
            <h3 className="text-[20px] font-semibold">Accessibility</h3>
            <h4 className="text-[15px] leading-[25px]">
            We provide multi-channel support for consultations (chat and video) and we also accommodate diverse schedules.
            </h4>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              P
            </div>
            <h3 className="text-[20px] font-semibold">Privacy</h3>
            <h4 className="text-[15px] leading-[25px]">
            We use secure storage to protect health information. Our privacy policies are clear, and communication is transparent. Our practices adhere to HIPAA regulatory requirements.
            </h4>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="inline-block p-3 my-2 text-2xl bg-white rounded-xl shadow-combined-custom">
              S
            </div>
            <h3 className="text-[20px] font-semibold">Speed</h3>
            <h4 className="text-[15px] leading-[25px]">
            We schedule consultation appointments promptly and minimize wait times. We deliver medications swiftly and promptly
            </h4>
          </div>
        </div>
        <hr className="border-[#0B3D7929] my-5 md:my-10 h-1 w-full"></hr>
        <div className="px-5 mx-2 md:px-0">
          <h1 className="md:w-[600px]  text-xl md:text-3xl font-semibold md:text-center">
            Maximize Your Medication Safety and Convenience with FlologPharma.
          </h1>
          <h3 className="md:w-[600px]  text-base md:text-center my-3">
          Safely manage your medications and simplify your healthcare routine with Flolog's innovative solutions
          </h3>
          <div className="flex items-center justify-center md:text-center">
            <Link href="/contact">
              <button className="flex px-[1rem] flex-row items-center py-[.5rem] gap-1 p-2 my-4 text-sm bg-white rounded-lg cursor-pointer ustify-center pitems-center text-primary hover:bg-gray-100 hover:transition-all">
                Get started
                <FaArrowRight className="text-primary" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

      {/* fourth content */}
   <div className="section4-container">
   <div className="mt-[3rem] w-[94%] md:w-[95%] rounded-[25px] mx-auto md:mt-[8rem] bg-[#F0F7FF] px-6 md:px-0 text-primary py-8 md:py-7 md:h-auto flex  flex-col justify-center items-center">
        <h2 className="font-semibold text-xl  md:w-[40%] md:mt-[5rem] text-center md:text-[36px] md:leading-[46px] md:font-[600]">
          Take an advantage of the Senior Citizens Care Program (SECCAP)
        </h2>
        <h4 className=" md:px-0 my-2 md:my-6 md:w-[40%] font-[400] leading-[27px] text-center text-[17px] md:text-[20px]">
          SECCAP is a comprehensive healthcare solution designed to support the
          well-being of the elderly in our communities.
        </h4>
        <Link href="/contact">
          <div className="flex px-[1rem] py-[.5rem] items-center justify-center gap-1 p-2 my-4 text-sm bg-white rounded-lg cursor-pointer text-primary hover:bg-gray-100 hover:transition-all md:mt-[3rem] md:mb-[5rem]">
            Register Now
            <FaArrowRight className="text-primary" />
          </div>
        </Link>

        <div className="md:h-[60%] mx-[-1.25rem] md:w-[78.2%]">
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
            src="/seccap.png"
            height={100}
            width={100}
            quality={100}
            unoptimized={true}
            className="w-full h-full"
          />
        </div>
        <div className="mt-[1rem] w-[100%] md:flex md:space-x-4 md:my-4 md:w-[70%] md:h-[200px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="w-full h-[200px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <Image
            src="/Rectangle87.png"
            height={100}
            width={100}
            quality={100}
            unoptimized={true}
            className="w-full h-full"
          /> */}
        </div>
      </div>
   </div>
      {/* fifth content  healthcare tips*/}
      <div className="items-center md:h-screen md:flex">
        <div className="mt-[3rem] bg-gradient-to-b py-[3rem] md:mt-[8rem] from-[#0C4E86] to-[#031320] my-2 md: flex flex-col text-white justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center px-3 my-2 text-center">
            <h3 className="my-4 text-xl font-semibold md:text-[36px]">
              Healthcare at Your Fingertip
            </h3>
            <h6 className=" md:text-[20px] md:w-[50%] leading-[27px]">
              In 15 months, we've made significant strides in becoming a trusted
              healthcare partner to
            </h6>
          </div>
          <div className="items-center justify-center hidden gap-6 my-12 md:flex px-[2rem] w-[100%]">
            <div className="flex flex-col items-center justify-center flex-1 gap-[1rem] px-[3rem] py-[1.5rem] border border-white rounded-full">
              <h3 className="text-2xl font-[400] md:text-[40px] text-center" >Over 100</h3>
              <h6 className="text-[13px] text-center">Pharmacies across Nigeria</h6>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-[1rem] px-[3rem] py-[1.5rem] border border-white rounded-full">
            <h3 className="text-2xl font-[400] md:text-[40px] text-center" >Over 50</h3>
              <h6 className="text-[13px] text-center">Hospitals across Nigeria</h6>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-[1rem] px-[3rem] py-[1.5rem] border border-white rounded-full">
            <h3 className="text-2xl font-[400] md:text-[40px] text-center" >Over 5,000</h3>
              <h6 className="text-[13px] text-center">Patients across Nigeria</h6>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-[1rem] px-[3rem] py-[1.5rem] border border-white rounded-full">
            <h3 className="text-2xl font-[400] md:text-[40px] text-center" >Over 10,000</h3>
              <h6 className="text-[13px] text-center">Healthcare providers across Nigeria</h6>
            </div>
          </div>
        </div>
      </div>
      {/* sixth content faq */}
<div className="mt-[3rem]">
        <div className="w-[94%] md:w-[95%] rounded-[25px] mx-auto md:mt-[7rem] p-4 my-3 faqs-section md:my-14 md:p-12 text-primary md:px-[6rem]">
        <h6 className="py-2 md:xl md:py-4 text-[18px] ">
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <h3 className="py-2 md:py-4 md:font-[600] md:text-[47px] text-[28px] leading-[37px] font-[600]">
          Everything you need to know
        </h3>
        <h6 className="py-2 text:sm md:text-lg md:py-4">
          Discover helpful information about our services and patient care in
          our FAQ library
        </h6>
        {/* faq components*/}
        <FAQ />
        <h5 className="py-3 text-[18px] md:py-6">
          If you have anything else you want to ask,
          <Link href="/" className="font-bold">
            &nbsp;reach out to us.
          </Link>
        </h5>
      </div>
</div>

      <div className="md:mt-[7rem]">
        {/* faq footer*/}
        <div className="flex-col items-center justify-center w-full mb-4 md:flex md:mb-6">
          <div className="flex flex-col gap-[.3rem] p-3 md:p-0 text-sm  md:flex justify-center items-stretch md:w-[70%] md:flex-row md:gap-[1rem]">
            <div className="flex-1 p-3 my-2 bg-whatsapp md:my-0 bg-custom-bg-4 md:p-11 rounded-xl">
              <div className="w-[25px] h-[25px]">
                <Link href="https://chat.whatsapp.com/IeKaaoCxj2612rlCbOpXM5">
                  <Image
                    src="/whatsapp.svg"
                    height={100}
                    width={100}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <h5 className="py-2 font-[16px] text-white ">Stay up to date</h5>
              <h6 className="text-white text-[15px] font-[400] leading-[23px]">
                Stay informed and engaged with our latest news, updates, and
                insights {/**/}
                <Link
                  href="https://chat.whatsapp.com/IeKaaoCxj2612rlCbOpXM5"
                  className="underline text-white font-[700]"
                >
                  by joining our WhatsApp community
                </Link>
                . We value your connection
              </h6>
            </div>
            <div className="flex-1 p-3 my-2 bg-instagram md:my-0 bg-custom-bg-5 md:p-11 rounded-xl ">
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
              <h5 className="py-2 font-[16px] text-white ">Stay up to date</h5>
              <h6 className="text-white text-[15px] font-[400] leading-[23px]">
                We’d love to stay connected with you. If the feeling’s mutual,
                follow
                <Link
                  href="https://www.instagram.com/flologpharma.co"
                  className="underline text-white font-[700]"
                >
                 &nbsp;@flologpharma's.com
                </Link>
                on Instagram for the latest news and updates.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
