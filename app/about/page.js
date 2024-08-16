import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4">
        <h1 className="font-semibold w-[60%] md:w-[30%] text-gray-50 text-xl md:text-3xl">
          Revolutionizing access to Pharmacists and Medicine
        </h1>
      </div>
      <div className="px-4 py-5 w-inherit md:py-10 text-primary">
        <div className="flex flex-col items-center p-6 bg-custom-bg-cyan rounded-xl md:p-12">
          <h2 className="my-2 text-xl font-semibold md:my-4">Our Story</h2>
          <h3 className="text-sm">
            <h3 className="my-3">
              All we wanted to do was create, multiply, and offer impact. What we
              ended up with is a company. When we first met in 2014 during our
              days at the University of Benin, Faculty of Pharmacy, it was not
              our intention to engage in any business venture. School politics
              brought us together. As our relationship waxed stronger, we
              birthed, in 2017, Florix Concepts – an organization committed to
              training, mentoring, and empowering young people. We went on to
              organize several training sessions on that platform
            </h3>
            <h3 className="my-3">
              But, Covid-19 changed the course of our journey. You may call it
              fate or destiny, but we found a higher calling to scale our impact
              vision, utilizing healthcare as a tool for the greater good. This
              birthed Florix Healthcare Limited, the parent company of
              Floglogpharma, in 2020.  The fulfillment, as they say, is not in
              the destination but in the journey. Indeed, we have had one
              awesome journey building this life, not just a company, called
              Floglogpharma.”
            </h3>
            <h3 className="my-3">
              Floglogpharma provides you viable, efficient, and cost-effective
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
      <div className="justify-center w-full my-2 text-sm text-gray-600 md:flex md:space-x-6 md:my-6">
        <div className="md:w-[20%] text-center md:text-start py-2 md:py-0">
          <hr />
          <h2 className="py-2 text-base font-bold">The Vision</h2>
          <h3>Health care for every African. Bridging Healthcare Gaps for a Healthier Africa</h3>
        </div>
        <div className="md:w-[20%] text-center md:text-start py-2 md:py-0">
          <hr />
          <h2 className="py-2 text-base font-bold">Our Mission</h2>
          <h3>
            To provide Africans with prompt access to quality and
            affordable healthcare
          </h3>
        </div>
        <div className="md:w-[20%] text-center md:text-start py-2 md:py-0">
          <hr />
          <h2 className="py-2 text-base font-bold">Our Core Values</h2>
          <h3>
            Built on Trust, Fueled by Innovation, and Pursuing Excellence in All
            We Do
          </h3>
        </div>
      </div>
      {/* fourth section*/}

      <div className="w-full px-4 py-1 md:py-10 text-primary">
        <div className="bg-[#F0F7FF] text-sm mt-2 md:mt-10 rounded-xl p-3 md:p-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold md:text-xl">
              The Founding Team
            </h2>
            <h3 className="md:w-[40%] text-center">
              To provide these services, Floglogpharma deploys the right
              technology, the right team, and at the right time always. The
              management team is led by three stellar Pharmacists
            </h3>
          </div>
          <div className="items-center justify-center mt-6 md:mt-10 md:flex md:space-x-12">
            <div className="flex flex-col items-center my-6 text-center md:my-0 md:block">
              <div className="border w-[120px] md:w-[220px] h-[120px] md:h-[210px]">
                <Image
                  src="/images/Rectangle93.png"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-sm font-semibold md:py-1 md:text-lg">
                Andrew Akhabue
              </h3>
              <h5 className="text-sm">Co-founder and CEO</h5>
            </div>
            <div className="flex flex-col items-center my-6 text-center md:my-0 md:block">
              <div className="border w-[120px] md:w-[220px]   h-[120px] md:h-[210px]">
                <Image
                  src="/images/man.jpg"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-sm font-semibold md:py-1 md:text-lg">
                Raphael Odoh
              </h3>
              <h5 className="text-sm">COO, Design and Development</h5>
            </div>
            <div className="flex flex-col items-center my-6 text-center md:my-0 md:block">
              <div className="border w-[120px] md:w-[220px]  h-[120px] md:h-[210px]">
                <Image
                  src="/images/lady.jpg"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-sm font-semibold md:py-1 md:text-lg">
                Joy Enwerem
              </h3>
              <h5 className="text-sm">COO, Finance and Strategy</h5>
            </div>
          </div>
        </div>
      </div>

      {/*fifth section*/}
      <div className="w-full md:h-full text-primary">
        <div className="flex flex-col items-center w-full">
          <h5 className="py-4 text-sm font-bold">OUR STRATEGY</h5>
          <h3 className="font-semibold">Senior Citizens Care Program</h3>
          <h3 className="font-semibold">(SECCAP)</h3>
        </div>
        <div className="px-3 md:px-6">
          <div className="md:flex justify-center space-y-2 md:space-y-0 md:space-x-4 my-4 w-full md:h-[200px]">
            <div className="md:w-[20%]">
              <Image
                src="/Rectangle89.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
            <div className="md:w-[20%]">
              <Image
                src="/Rectangle90.png"
                height={100}
                width={100}
                quality={100}
                unoptimized={true}
                className="w-full h-full"
              />
            </div>
            <div className="md:w-[20%]">
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
          <div className="hidden md:flex justify-start space-x-4 my-4 w-full h-[200px]">
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
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-3 py-5 text-base text-gray-100 md:px-0 bg-custom-bg-6 md:h-full md:py-10">
          <h3 className="md:w-[40%]">
            “In Trust, Innovation and Excellence, we exist to provide unhindered
            access to healthcare for every African”           
          </h3>
          <h5 className="text-sm font-semibold">Dr. Andrew Akhabue, PharmD</h5>
        </div>
      </div>
    </div>
  );
};

export default page;
