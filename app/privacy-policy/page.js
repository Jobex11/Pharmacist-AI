import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[30rem] w-full p-4">
        <h1 className="md:w-[60%] text-gray-50 text-[50px] font-[600] text-center w-[100%]">
          Privacy Policy
        </h1>
      </div>
      <div className="flex flex-col items-center p-6 bg-[text-gray-200] rounded-xl md:p-12 md:pt-[5rem] pt-[3rem]">
        <h4 className="text-[#000000] text-[19px] md:leading-[40px] font-[300] w-[85%] flex flex-col gap-[1.5rem] md:gap-[2rem]">
          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            Introduction
          </h2>
          <p>
            Welcome to FlologPharma. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services, including our website, mobile applications, and other online services (collectively, the "Services"). By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not use our Services.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            1. Information We Collect
          </h2>
          <p>
            We may collect and process the following types of information:
          </p>
          
          <h3 className="md:text-[32px] text-[20px] font-[600]">1.1 Personal Information</h3>
          <ul className="pl-5 space-y-4 list-disc list-inside text-[19px]">
            <li>
              <span className="font-[600] text-[19px]">Name:</span> First and last name.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Contact Information:</span> Email address, phone number, and mailing address.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Identity Information:</span> Government-issued ID, date of birth, and gender.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Payment Information:</span> Credit card details, billing address, and payment history.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Health Information:</span> Information related to your medical prescriptions and any related health data necessary for the provision of our services.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Account Information:</span> Username, password, and other registration details.
            </li>
          </ul>

          <h3 className="md:text-[32px] text-[20px] font-[600]">1.2 Non-Personal Information</h3>
          <ul className="pl-5 space-y-4 list-disc list-inside text-[19px]">
            <li>
              <span className="font-[600] text-[19px]">Usage Data:</span> Information about your interactions with our Services, such as pages visited, links clicked, and time spent on our website.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Device Information:</span> Information about the device you use to access our Services, including IP address, browser type, operating system, and device identifiers.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Location Information:</span> General location data based on your IP address or more precise location information if you have enabled location services on your device.
            </li>
          </ul>

          <h3 className="md:text-[32px] text-[20px] font-[600]">1.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, and similar tracking technologies to collect information about your use of our Services. Cookies are small text files stored on your device that help us improve your experience and deliver personalized content. You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            2. How We Use Your Information
          </h2>
          <p>
            We may use your information for various purposes, including:
          </p>

          <h3 className="md:text-[32px] text-[20px] font-[600]">2.1 Providing Services</h3>
          <ul className="pl-5 space-y-4 list-disc list-inside text-[19px]">
            <li>
              <span className="font-[600] text-[19px]">Processing Orders:</span> To fulfill your orders for pharmaceutical products and services, including home and international delivery.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Customer Support:</span> To provide customer service, answer your inquiries, and resolve issues related to your use of our Services.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Account Management:</span> To create, maintain, and manage your account with FlologPharma.
            </li>
          </ul>

          <h3 className="md:text-[32px] text-[20px] font-[600]">2.2 Improving and Personalizing Your Experience</h3>
          <ul className="pl-5 space-y-4 list-disc list-inside text-[19px]">
            <li>
              <span className="font-[600] text-[19px]">Service Enhancements:</span> To analyze and improve our Services, including website functionality, user experience, and product offerings.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Personalization:</span> To tailor content, recommendations, and marketing communications based on your preferences and usage patterns.
            </li>
          </ul>

          <h3 className="md:text-[32px] text-[20px] font-[600]">2.3 Marketing and Communications</h3>
          <ul className="pl-5 space-y-4 list-disc list-inside text-[19px]">
            <li>
              <span className="font-[600] text-[19px]">Promotional Offers:</span> To send you promotional materials, special offers, and other information about our products and services that may be of interest to you.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Newsletters:</span> To send you newsletters and updates about Flolog’s activities and developments.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Surveys and Feedback:</span> To request your feedback through surveys or other methods to improve our Services.
            </li>
          </ul>

          <h3 className="md:text-[32px] text-[20px] font-[600]">2.4 Legal and Security Purposes</h3>
          <ul className="pl-5 space-y-4 list-disc list-inside text-[19px]">
            <li>
              <span className="font-[600] text-[19px]">Compliance:</span> To comply with legal obligations, such as tax, accounting, and regulatory requirements.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Fraud Prevention:</span> To detect, prevent, and respond to fraud, security breaches, and other potentially harmful activities.
            </li>
            <li>
              <span className="font-[600] text-[19px]">Enforcement:</span> To enforce our terms of service and other legal agreements.
            </li>
          </ul>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            3. How We Share Your Information
          </h2>
          <p>
            We do not sell your personal information to third parties. However, we may share your information in the following circumstances:
          </p>

          <h3 className="md:text-[32px] text-[20px] font-[600]">3.1 Service Providers</h3>
          <p>
            We may share your information with third-party service providers who assist us in providing and managing our Services. These providers may include payment processors, delivery services, IT support, and marketing partners. These third parties are required to protect your information and use it only for the purposes we specify.
          </p>

          <h3 className="md:text-[32px] text-[20px] font-[600]">3.2 Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law, such as in response to a subpoena, court order, or government investigation, or to protect our rights or the rights of others.
          </p>

          <h3 className="md:text-[32px] text-[20px] font-[600]">3.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of that transaction.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            4. Security of Your Information
          </h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no security system is completely foolproof, and we cannot guarantee the security of your information.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            5. Your Choices and Rights
          </h2>
          <p>
            You have certain rights regarding your personal information, including the right to access, correct, or delete your data. You may also choose to opt-out of receiving marketing communications from us. To exercise these rights, please contact us at support@flologpharma.com.
          </p>

          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            6. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
          
          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
            <br />
            Email: support@flologpharma.com
          </p>
        </h4>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
