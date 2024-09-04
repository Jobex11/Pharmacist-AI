import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  const images = [
    "/Rectangle89.png",
    "/Rectangle90.png",
    "/Rectangle91.png",
    "/Rectangle89.png",
  ];

  // Duplicate the images array 20 times
  const duplicatedImages = Array.from({ length: 20 }).flatMap(() => images);
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex items-center justify-center w-full p-4 bg-custom-bg-1 md:pb-[8rem] h-[25rem] pt-[4rem]">
        {/* <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4"> */}
        <h1 className="text-[40px] w-[80%] leading-[54px] md:text-center md:text-[50px] font-[600] md:leading-[64px] md:w-[50%] md:mt-[10rem] text-gray-50">
          Revolutionizing access to Pharmacists and Medicine
        </h1>
      </div>
      {/* <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4 md:h-[30rem]">
            <h1 className="w-[60%] md:w-[30%] text-gray-50  text-center text-[50px] font-[600]">
              Blog
            </h1>
          </div> */}
      <div className="px-4 py-5 w-inherit md:py-10 text-primary">
        <div className="flex flex-col items-center p-6 bg-custom-bg-cyan rounded-xl md:p-12 md:px-[7rem] md:mt-[5rem]">
          <h2 className="my-2 font-semibold md:my-4 md:text-[36px] md:font-[600] md:mb-[2.5rem] text-[26px]">
            Our Story
          </h2>
          <h3 className="text-[19px] leading-[32px]">
            <h3 className="my-3 md:text-[19px] md:leading-[29px] text-[19px] leading-[32px]">
              All we wanted to do was create, multiply, and offer impact. What
              we ended up with is a company. When we first met in 2014 during
              our days at the University of Benin, Faculty of Pharmacy, it was
              not our intention to engage in any business venture. School
              politics brought us together. As our relationship waxed stronger,
              we birthed, in 2017, Florix Concepts – an organization committed
              to training, mentoring, and empowering young people. We went on to
              organize several training sessions on that platform
            </h3>
            <h3 className="my-3">
              But, Covid-19 changed the course of our journey. You may call it
              fate or destiny, but we found a higher calling to scale our impact
              vision, utilizing healthcare as a tool for the greater good. This
              birthed Florix Healthcare Limited, the parent company of
              Flologpharma, in 2020.  The fulfillment, as they say, is not in
              the destination but in the journey. Indeed, we have had one
              awesome journey building this life, not just a company, called
              Flologpharma.”
            </h3>
            <h3 className="my-3">
              Flologpharma provides you viable, efficient, and cost-effective
              healthcare solutions including:
              <ul className="pl-5 list-disc text-primary">
                <li>
                  Prompt and convenient access to quality medications online and
                  offline
                </li>
                <li>Online medication order and delivery</li>
                <li>Walk-in integrative Pharmacy chain</li>
                <li>In-App online access to qualified Pharmacists</li>
                <li>Pharmacists’ finder in 60 seconds</li>
                <li>Pharmacists’ aggregator</li>
              </ul>
            </h3>
          </h3>
        </div>
      </div>
      {/* third section */}
      <div className="justify-center w-full my-2 text-sm text-gray-600 md:flex md:space-x-6 md:my-6 md:ml-[8rem]">
        <div className="py-2 text-center md:text-start md:py-0">
          <hr />
          <h2 className="py-2 text-base font-bold text-[20px]">The Vision</h2>
          <h3 className="md:w-[50%] text-[17px] leading-[30px]">
            Health care for every African. Bridging Healthcare Gaps for a
            Healthier Africa
          </h3>
        </div>
        <div className="py-2 text-center md:text-start md:py-0">
          <hr />
          <h2 className="py-2 text-base font-bold text-[20px]">Our Mission</h2>
          <h3 className="md:w-[50%] text-[17px] leading-[30px]">
            To provide Africans with prompt access to quality and
            affordable healthcare
          </h3>
        </div>
        <div className="py-2 text-center md:text-start md:py-0">
          <hr />
          <h2 className="py-2 text-base font-bold text-[20px]">Our Core Values</h2>
          <h3 className="md:w-[50%] text-[17px] leading-[30px]">
            Built on Trust, Fueled by Innovation, and Fulfilled in Excellence always
          </h3>
        </div>
      </div>
      {/* fourth section*/}

      <div className="w-full px-4 py-1 md:py-10 text-primary">
        <div className="bg-[#F0F7FF] text-sm mt-2 md:mt-10 rounded-xl p-3 md:p-12 md:px-[8rem]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold md:text-xl pb-[0.5rem]">
              The Founding Team
            </h2>
            <h3 className="md:w-[40%] text-center text-[17px] leading-[30px]">
              To provide these services, Flologpharma deploys the right
              technology, the right team, and at the right time always. The
              management team is led by three stellar Pharmacists
            </h3>
          </div>
          <div className="items-center justify-center mt-6 md:mt-10 md:flex md:space-x-12">
            <div className="flex flex-col items-center my-10 text-center md:my-0 md:block md:w-[100%]">
              <div className="border w-[100%] md:w-[100%] h-[300px] md:h-[100%] rounded-[12px]">
                {/* <div className="border w-[120px] md:w-[220px] h-[120px] md:h-[210px]"> */}
                <Image
                  src="/images/Rectangle93.png"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full md:h-[400px] rounded-[12px]"
                />
              </div>
              <h3 className="font-semibold md:py-1 md:text-lg md:text-[30px] md:pt-[2rem] pt-[1rem] text-[20px]">
                Dr. Andrew Akhabue, PharmD
              </h3>
              <h5 className="md:text-[19px] md:text-center md:pt-[0.5rem] pt-[5px] text-[16px]">
                Co-founder and CEO
              </h5>
            </div>
            <div className="flex flex-col items-center my-10 text-center md:my-0 md:block md:w-[100%]">
            <div className="border w-[100%] md:w-[100%] h-[300px] md:h-[100%] rounded-[12px]">
                <Image
                  src="/images/man.jpg"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full md:h-[400px] rounded-[12px]"
                />
              </div>
              <h3 className="font-semibold md:py-1 md:text-lg md:text-[30px] md:pt-[2rem] pt-[1rem] text-[20px]">
                Dr. Raphael Odoh, PharmD
              </h3>
              <h5 className="md:text-[19px] md:text-center md:pt-[0.5rem] pt-[5px] text-[16px]">
                COO, Design and Development
              </h5>
            </div>
            <div className="flex flex-col items-center my-10 text-center md:my-0 md:block md:w-[100%]">
            <div className="border w-[100%] md:w-[100%] h-[300px] md:h-[100%] rounded-[12px]">
                <Image
                  src="/images/lady.jpg"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full  md:h-[400px] rounded-[12px]"
                />
              </div>
              <h3 className="font-semibold md:py-1 md:text-lg md:text-[30px] md:pt-[2rem] pt-[1rem] text-[20px]">
                Dr. Joy Enwerem, PharmD
              </h3>
              <h5 className=" md:text-[19px] md:text-center md:pt-[0.5rem] pt-[5px] text-[16px]">
                COO, Finance and Strategy
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/*fifth section*/}
      <div className="w-full md:h-full text-primary">
        <div className="flex flex-col items-center w-full">
          <h5 className="py-4 text-sm font-bold md:font-[700] md:text-[14px] text-[13px]">
            OUR OUTREACHES
          </h5>
          <h3 className="font-semibold md:text-[36px] text-[20px]">
            Senior Citizens Care Program
          </h3>
          <h3 className="font-semibold md:text-[36px] text-[20px]">(SECCAP)</h3>
        </div>
        <div className="px-3 md:px-6 my-[3rem] md:my-[5rem]">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedImages.map((src, index) => (
                <div key={index} className="flex-shrink-0 mx-2">
                  <Image
                    src={src}
                    height={100}
                    width={100}
                    quality={100}
                    unoptimized={true}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="hidden md:flex justify-start space-x-4 my-4 w-full h-[200px]">
            <div className="w-[20%]">
              <Image
                src="/Rectangle89.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
            <div className="w-[20%]">
              <Image
                src="/Rectangle90.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
            <div className="w-[20%]">
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
          <div className="hidden md:flex justify-end space-x-4 my-4 w-full h-[200px]">
            <div className="w-[20%]">
              <Image
                src="/Rectangle89.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
            <div className="w-[20%]">
              <Image
                src="/Rectangle90.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
            <div className="w-[20%]">
              <Image
                src="/Rectangle91.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
          </div> */}
        </div>
        <div className="flex flex-col font-[600] items-center justify-center w-full px-3 py-5 text-base text-gray-100 md:px-0 bg-custom-bg-6 md:h-full md:py-10 text-center md:text-[21px] md:font-[700] md:leading-[33px]">
          <h3 className="md:w-[40%]">
            “In Trust, Innovation and Excellence, we exist to provide unhindered
            access to healthcare for every African”
          </h3>
          <h5 className="text-sm md:font-[400] md:mt-[1rem] font-[300]">
            Dr. Andrew Akhabue, PharmD
          </h5>
        </div>
      </div>
    </div>
  );
};

export default page;
