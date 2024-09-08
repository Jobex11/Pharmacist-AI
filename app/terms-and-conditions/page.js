import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[30rem] w-full p-4 md:h-[30rem]">
        <h1 className="md:w-[60%] text-gray-50 text-[50px] font-[600] text-center w-[100%]">
          Terms and Conditions
        </h1>
      </div>
      <div className="flex flex-col items-center p-6 bg-[text-gray-200] rounded-xl md:p-12 md:pt-[5rem] pt-[3rem]">
        <h4 className="text-[#000000] text-[19px] md:leading-[40px] font-[300] w-[85%] flex flex-col gap-[2rem]">
          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            1. User Account and Registration
          </h2>
          <div className="md:flex md:flex-col md:gap-[2rem] flex flex-col gap-[2rem]">
            <p>
              To use the FlologPharma mobile application, users must have a smartphone.
              Users can register through two options:
            </p>
            <ul className="pl-5 space-y-4 list-disc list-inside">
              <li className="text-[19px]">
                <span className="font-[600]">Google Account:</span>
                &nbsp;Automatic registration via their Google account.
              </li>
              <li className="text-[19px]">
                <span className="font-[600]">Manual Registration:</span>
                &nbsp;By filling out the registration form, providing their full name, phone number, email address, and password.
              </li>
            </ul>
            <p>
              Eligibility to use the platform is restricted to individuals aged <strong>16 years and above</strong>.
              By registering, users confirm that the information provided is accurate and up-to-date.
              Users are responsible for safeguarding their account credentials and agree not to share their login details with others.
              Any unauthorized access or activity on a user’s account should be reported immediately to FlologPharma.
            </p>
          </div>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            2. Services Provided
          </h2>
          <div className="md:flex md:flex-col md:gap-[2rem] flex flex-col gap-[2rem]">
            <ul className="pl-5 space-y-4 list-disc list-inside">
              <li className="text-[19px]">
                Access to quality medications both <strong>online</strong> and <strong>offline</strong>.
              </li>
              <li className="text-[19px]">
                An <strong>online pharmacy</strong> where users can order and have medications delivered.
              </li>
              <li className="text-[19px]">
                Access to a <strong>walk-in pharmacy</strong> for personal consultations.
              </li>
              <li className="text-[19px]">
                <strong>In-app consultations</strong> with qualified pharmacists.
              </li>
              <li className="text-[19px]">
                A unique <strong>Pharmacists' finder</strong>, allowing users to connect with a pharmacist within 60 seconds.
              </li>
            </ul>
          </div>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            3. In-App Purchases and Payment
          </h2>
          <div className="md:flex md:flex-col md:gap-[2rem] flex flex-col gap-[2rem]">
            <p className="text-[19px]">
              The FlologPharma app offers additional features that require the purchase of tokens. Accepted payment methods include:
            </p>
            <ul className="pl-5 space-y-4 list-disc list-inside">
              <li className="text-[19px]">Bank transfer</li>
              <li className="text-[19px]">USSD</li>
              <li className="text-[19px]">Card payments</li>
            </ul>
            <p>
              All payments are processed via a third-party payment processor, <strong>Paystack</strong>.
              Disputes regarding payments will be managed by Paystack. For unresolved disputes, users can contact FlologPharma via customer care or email <strong>support@flologpharma.co</strong>.
            </p>
          </div>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            4. Data Privacy and Security
          </h2>
          <p className="text-[19px]">
            FlologPharma takes the privacy and security of your personal and health information seriously.
            For more details, refer to our <strong> <a href="/privacy-policy">Privacy Policy
                  </a></strong>.We encourage all users to review this policy periodically. By using our services, you consent to our data handling practices.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            5. Limitation of Liability
          </h2>
          <div className="md:flex md:flex-col md:gap-[2rem] flex flex-col gap-[2rem]">
            <ul className="pl-5 space-y-4 list-disc list-inside">
              <li className="text-[19px]">
                <strong className="text-[19px] font-[600]">Incorrect or Damaged Products:</strong>
                &nbsp;Notify us within <strong>6 hours</strong> of delivery if products are incorrect, damaged, or defective.
              </li>
              <li className="text-[19px]">
              <strong className="text-[19px] font-[600]">Non-Delivery of Products:</strong>
                &nbsp;Notify us within <strong>7 business days</strong> if products are not received within <strong>5 days</strong>.
              </li>
            </ul>
            <p>
              FlologPharma will replace, repair, or refund as necessary, but is not liable for any indirect or consequential losses.
            </p>
          </div>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            6. User Responsibilities
          </h2>
          <p className="text-[19px]">
            Users agree to use the platform in compliance with all applicable laws. Misuse of services may result in account suspension or termination.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            7. Refunds and Returns
          </h2>
          <p className="text-[19px]">
            Refunds are subject to FlologPharma's discretion. Issues regarding products must be reported within <strong>6 hours</strong> for prompt response.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            8. Governing Law
          </h2>
          <p className="text-[19px]">
            These terms are governed by the laws of <strong>Nigeria</strong>, and any disputes will be subject to the jurisdiction of the courts in Nigeria.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            9. Changes to Terms
          </h2>
          <p className="text-[19px]">
            FlologPharma reserves the right to update these terms. Users will be notified of any changes, and continued use of the app signifies acceptance.
          </p>
        </h4>
      </div>
    </div>
  );
};

export default TermsAndConditions;
