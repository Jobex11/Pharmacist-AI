import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4">
        <h1 className="font-bold w-[30%] text-gray-50 text-3xl">
          Revolutionizing access to Pharmacists and Medicine
        </h1>
      </div>
      <div className="w-inherit py-10 px-4 text-primary">
        <div className="bg-custom-bg-cyan rounded-xl p-12 flex flex-col items-center">
          <h2 className="font-bold text-xl my-4">Our Story</h2>
          <h3 className="text-sm">
            <h3 className="my-3">
              ll we wanted to do was create, multiply, and offer impact. What we
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
              birthed Florix Healthcare Limited, the parent company of Flolog,
              in 2020.  The fulfillment, as they say, is not in the destination
              but in the journey. Indeed, we have had one awesome journey
              building this life, not just a company, called FLOLOG.”
            </h3>
            <h3 className="my-3">
              FLOLOG provides you viable, efficient, and cost-effective
              healthcare solutions including:
              <ul className="list-disc text-primary pl-5">
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
      <div className="w-full flex justify-center space-x-6 text-sm text-gray-600 my-6">
        <div className="w-[20%]">
          <hr />
          <h2 className="text-base font-bold py-2">The Vision</h2>
          <h3>
            Healthcare for every African. (Bridging Healthcare Gaps for a
            Healthier Africa)
          </h3>
        </div>
        <div className="w-[20%]">
          <hr />
          <h2 className="text-base font-bold py-2">Our Mission</h2>
          <h3>
            To provide Africans with prompt access to quality and
            affordable healthcare
          </h3>
        </div>
        <div className="w-[20%]">
          <hr />
          <h2 className="text-base font-bold py-2">Our Core Values</h2>
          <h3>
            Built on Trust, Fueled by Innovation, and Pursuing Excellence in All
            We Do
          </h3>
        </div>
      </div>
      {/* fourth section*/}

      <div className="w-full py-10 px-4 text-primary">
        <div className="bg-[#F0F7FF] text-sm mt-10 rounded-xl p-12">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl">The Founding Team</h2>
            <h3 className="w-[40%] text-center">
              To provide these services, Flolog deploys the right technology,
              the right team, and at the right time always. The management team
              is led by three stellar Pharmacists
            </h3>
          </div>
          <div className="mt-10 flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="border w-[220px] h-[250px]">
                <Image
                  src="/images/Rectangle93.png"
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                  className="w-full h-full"
                />
              </div>
              <h3 className="py-1 text-lg font-bold">Andrew Akhabue</h3>
              <h5 className="text-sm">Co-founder and CEO</h5>
            </div>
            <div className="text-center">
              <div className="border w-[220px] h-[250px]"></div>
              <h3 className="py-1 text-lg font-bold">Raphael Odoh</h3>
              <h5 className="text-sm">Chief Operations Officer</h5>
            </div>
            <div className="text-center">
              <div className="border w-[220px] h-[250px]"></div>
              <h3 className="py-1 text-lg font-bold">Joy Enwerem</h3>
              <h5 className="text-sm">COO Finance and Strategy</h5>
            </div>
          </div>
        </div>
      </div>

      {/*fifth section*/}
      <div className="w-full h-full text-primary">
        <div className="w-full flex flex-col items-center">
          <h5 className="py-4 text-sm font-bold">OUR STRATEGY</h5>
          <h3 className="font-bold">Senior Citizens Care Program</h3>
          <h3 className="font-bold">(SECCAP)</h3>
        </div>
        <div className="px-6">
          <div className="flex justify-center space-x-4 my-4 w-full h-[200px]">
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
          <div className="flex justify-start space-x-4 my-4 w-full h-[200px]">
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
          <div className="flex justify-end space-x-4 my-4 w-full h-[200px]">
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
        <div className="text-gray-100 text-base bg-custom-bg-6 h-full w-full flex flex-col justify-center items-center py-10">
          <h3 className="w-[40%]">
            “In Trust, Innovation and Excellence, we exist to provide unhindered
            access to healthcare for every African”           
          </h3>
          <h5 className="text-sm font-bold">Dr. Andrew Akhabue, PharmD</h5>
        </div>
      </div>
    </div>
  );
};

export default page;
