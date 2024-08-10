"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen">
      {/* nav content */}
      <nav className="flex fixed top-0 left-0  justify-between items-center py-6 px-14 w-full z-100">
        <div className="flex space-x-4">
          <Link href="/">
            <div className="mr-6">
              <Image width={100} height={100} src="/logo.png" />
            </div>
          </Link>

          <ul className="flex space-x-6 text-gray-300 text-basic">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About Us</li>
            </Link>

            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className="bg-gray-300 p-1 text-sm cursor-pointer">
          Download App
        </div>
      </nav>

      {/* first content */}
      <div className="bg-[url('/Rectangle37.png')] bg-cover bg-center h-screen w-full py-10 flex flex-col items-center">
        <h1 className="text-4xl w-[600px] text-gray-200 mt-12 text-center">
          Connect with Expert Pharmacists Anytime, Anywhere with Flolog
        </h1>
        <h4 className="m-4 text-base w-[600px] text-gray-400  text-center">
          Experience Premium Pharmaceutical Care on your mobile. Refill
          medications easily, and lots more.
        </h4>
        <div className="  w-[700px] flex justify-center items-center flex-row m-4 h-[600px]">
          <div className="h-full w-[50%] mr-[-60px] z-0">
            <Image
              width={600}
              height={600}
              src="/Group6321.png"
              className="h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center h-full">
            <Image
              width={100}
              height={100}
              src="/Maskgroup.png"
              className="h-[50%] object-cover w-full"
            />
            <Image
              width={100}
              height={100}
              src="/Group6322.png"
              className="h-[50%] object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/* second content */}
      <div className="bg-custom-bg-cyan text-[#0C4E86]  h-screen w-full py-10 flex flex-col items-center">
        <h1 className="w-[600px]  text-3xl font-bold text-center my-2">
          We guarantee you the CAPS of healthcare
        </h1>
        <div className="flex mt-6 mx-14 space-x-8">
          <div className=" flex-1">
            <div className="rounded-xl bg-white text-2xl  shadow-combined-custom inline-block p-3 my-2">
              C
            </div>
            <h3 className="font-bold text-base">Convenience</h3>
            <h4 className="text-sm">
              We offer easy online appointment scheduling, telemedcine options
              for remote consultations, and a streamlined processes to reduce
              wait ties.
            </h4>
          </div>
          <div className=" flex-1">
            <div className="rounded-xl bg-white text-2xl  shadow-combined-custom inline-block p-3 my-2">
              A
            </div>
            <h3 className="font-bold text-base">Accessibility</h3>
            <h4 className="text-sm">
              We provide multi-channel support for consultations (chat and
              video) and we also accomodate diverse schedules.
            </h4>
          </div>
          <div className=" flex-1">
            <div className="rounded-xl bg-white text-2xl  shadow-combined-custom inline-block p-3 my-2">
              P
            </div>
            <h3 className="font-bold text-base">Privacy</h3>
            <h4 className="text-sm">
              We schedule consultation appointment promptly and minimize wait
              times. We deliver medications swiftly and promptly.
            </h4>
          </div>
          <div className="flex-1">
            <div className="rounded-xl bg-white text-2xl  shadow-combined-custom inline-block p-3 my-2">
              S
            </div>
            <h3 className="font-bold text-base">Speed</h3>
            <h4 className="text-sm">
              We schedule consultation appointments promptly and minimize wait
              times. We deliver medications swiftly and promptly
            </h4>
          </div>
        </div>
        <hr className="border-[#0B3D7929] my-10 h-1 w-full"></hr>
        <div>
          <h1 className="w-[600px]  text-3xl font-bold text-center">
            Maximize Your Medication Safety and Convenience with Floglog.
          </h1>
          <h3 className="w-[600px]  text-base text-center my-3">
            Safely manage your medications and simplify your healthcare routine
            with Flolog's innovative solutions
          </h3>
          <div className="text-center">
            <button className=" bg-gray-100 p-1 text-sm cursor-pointer">
              Get started
            </button>
          </div>
        </div>
      </div>
      {/* third content -> solutions */}
      <div className="w-full h-auto p-10 flex flex-col items-center justify-center text-primary">
        <h5 className="font-bold text-base my-6">OUR SOLUTION</h5>
        <div className="flex w-[50%] justify-center items-center space-x-5 h-[400px] my-6">
          <div className="bg-custom-bg-2 w-[60%] h-full flex justify-center items-end rounded-xl">
            <Image
              src="/Image[img-feature-lg].png"
              height={100}
              width={100}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
          <div className="w-[40%] px-3">
            <h3 className="text-2xl">Consult a Pharmacist</h3>
            <h5 className="text-sm mt-1">
              Experience the flexibility of remote pharmaceutical consulations,
              24/7. Get trusted consultation guidance and support from our team
              of pharmacists, anytime, anywhere.
            </h5>
          </div>
        </div>
        <div className="flex w-[50%] justify-center items-center space-x-5 h-[400px] my-6">
          <div className="w-[40%] px-3">
            <h3 className="text-2xl">Manage your medications use with ease</h3>
            <h5 className="text-sm mt-1">
              Keeping track of your medications should'nt be complicated. Our
              app streamliness the process, allowing you to effortlessly
              organize, schedule, and monitor your medication intake.Take
              control of your health journey with simplicity and peace of mind.
            </h5>
          </div>
          <div className="bg-custom-bg-2 w-[60%] h-full flex justify-end items-end rounded-xl">
            <Image
              src="/Layer_1.png"
              height={100}
              width={100}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
        </div>
        <div className="flex w-[50%] justify-center items-center space-x-5 h-[400px] my-6">
          <div className="bg-custom-bg-3 w-[60%] h-full flex justify-center items-end rounded-xl">
            <Image
              src="/Layer_2.png"
              height={100}
              width={100}
              className="relative z-10 h-[80%] w-[80%]"
            />
          </div>
          <div className="w-[40%] px-3">
            <h3 className="text-2xl">Order your prescriptions and OTCs</h3>
            <h5 className="text-sm mt-1">
              Say goodbye to long queses! With our app you can effortlessly
              request over-the-counter medications from the comfort of your own
              home. Browse, select, and order with just a few taps.
            </h5>
          </div>
        </div>
      </div>
      {/* fourth content */}
      <div className="text-primary py-7 h-screen flex  flex-col justify-center items-center border">
        <h2 className="font-bold text-2xl w-[40%] text-center">
          Take an advantage of the Senior Citizens Care Program (SECCAP)
        </h2>
        <h4 className="text-sm my-6 w-[40%]">
          SECCAP is a comprehensive healthcare solution designed to support the
          well-being of the elderly in our communities.
        </h4>
        <button></button>

        <div>big image</div>
        <div>
          <div>
            <Image src="/Rectangle87.png" height={100} width={100} />
          </div>
          <div>
            <Image src="/Rectangle89.png" height={100} width={100} />
          </div>
          <div>
            <Image src="/Rectangle90.png" height={100} width={100} />
          </div>
          <div>
            <Image src="/Rectangle87.png" height={100} width={100} />
          </div>
        </div>
        {/*text drop sided big image*/}
        <span>
          Convenient home delivery of medications, saving you time and effort
        </span>
        <span>
          Get uninterrupted monthly medication refills for your elderly
        </span>
        <span>
          Access to qualified Clinical Pharmacists for expert guidance and
          support, whenever and wherever needed
        </span>
      </div>
      {/* fifth content  healthcare tips*/}
      <div>
        <div>
          <h3>Healthcare at Your fingertip</h3>
          <h6>
            In 15 months, we've made significant strides in becoming a trusted
            healthcare partner to
          </h6>
        </div>
        <div>
          <div>
            <h3>Over 100</h3>
            <h6>Pharmacies across Nigeria</h6>
          </div>
          <div>
            <h3>Over 50</h3>
            <h6>Hospitals across Nigeria</h6>
          </div>
          <div>
            <h3>Over 5,000</h3>
            <h6>Patients across Nigeria</h6>
          </div>
          <div>
            <h3>Over 10,000</h3>
            <h6>Healthcare providers across Nigeria</h6>
          </div>
        </div>
      </div>
      {/* sixth content  faq*/}
      <div>
        <div>
          <h6>Frequently asked questions</h6>
          <h3>Everything you need to know</h3>
          <h6>
            Discover helpful information about our services and patient care in
            our FAQ library
          </h6>
          <div>
            {/* accordion groups*/}
            <div>What are your services?</div>
            <div>How can I make an appointment?</div>
            <div>
              Can I receive a prescription through an online consultation?
            </div>
            <div>How much does an online consultation cost?</div>
            <div>Is my personal and medical information secure?</div>
            <div>Are your online consultations HIPAA compliant?</div>
            <div>How much does an online consultation cost?</div>
            <div>
              Can I follow up with my consultant after the consultation?
            </div>
          </div>
          <h5>If you have anything else you want to ask, reach out to us.</h5>
        </div>
        {/* faq footer*/}
        <div>
          <div>
            <div>
              <logo>whatsapp logo</logo>
              <h5>Stay up to date</h5>
              <h6>
                Stay informed and engaged with our latest news, updates, and
                insights by joining our WhatsApp community. We value your
                connection and look forward to continuing the conversation.
              </h6>
            </div>
            <div>
              <log0>twitter logo</log0>
              <h5>Stay up to date</h5>
              <h6>
                We’d love to stay connected with you. If the feeling’s mutual,
                follow @flolog.co on Twitter for the latest news and updates.
              </h6>
            </div>
          </div>
          <div>
            <div>
              <h5>Subscribe to our newsletter</h5>
              <h6>
                Receive exclusive updates on new products and services before
                anyone else
              </h6>
            </div>
            <div>
              <div>
                <input></input> <button>Subscribe</button>
              </div>
              <h6>
                By providing your email address, you consent to receive Flolog's
                monthly newsletter, which includes updates, insights, and
                industry news. Please review our Privacy Policy for details on
                how we protect and manage your data. You may revoke your consent
                and unsubscribe at any time.
              </h6>
            </div>
          </div>
          <div>
            <div>
              <div>
                <logo>app stor</logo>
                <logo>google play</logo>
              </div>
              <div>
                <div>
                  <h5>QUICK LINKS</h5>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h5>SOLUTIONS</h5>
                  <ul>
                    <li>Consult Pharmacist</li>
                    <li>Request Medication</li>
                    <li>SECCAP Program</li>
                    <li>Emergency Medicine</li>
                  </ul>
                </div>
                <div>
                  <h5>LEGAL</h5>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Acceptable Use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* this is for footer*/}
            <div>
              Copyright © 2024 Florix Healthcare Ltd. All rights reserved.
            </div>
            <div>
              <logo>Whatsap</logo>
              <logo>Instagram</logo>
              <logo>LinkedIn</logo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
