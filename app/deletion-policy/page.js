import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[30rem] w-full p-4 md:h-[30rem]">
        <h1 className="md:w-[60%] text-gray-50 text-[50px] font-[600] text-center w-[100%]">
          Policy for Deleting FlologPharma App Account
        </h1>
      </div>
      <div className="flex flex-col items-center p-6 bg-[text-gray-200] rounded-xl md:p-12 md:pt-[5rem] pt-[3rem]">
        <h4 className="text-[#000000] text-[19px] md:leading-[40px] font-[300] w-[85%] flex flex-col gap-[.5rem]">
          <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
            Step-wise Process for Deleting Your Account:
          </h2>
          <div className="md:flex md:flex-col md:gap-[2rem] flex flex-col gap-[2rem]">
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <span className="font-[500] text-[19px]">1.</span>
                <p className="ml-2">
                  <span className="font-[600] text-[19px]">
                    Initiate Deletion Request:
                  </span>
                  &nbsp;By following the "Delete account" button from the user
                  profile, the user is prompted to type in the account password
                  to send the deletion request to FlologPharma admins.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-[500] text-[19px]">2.</span>
                <p className="ml-2">
                  <span className="font-[600] text-[19px]">Verification:</span>
                  &nbsp;Our team will verify your identity via the email or WhatsApp
                  number associated with your account to ensure the security of
                  the deletion process. This may involve confirming certain
                  account details or requesting additional information for
                  verification purposes.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-[500] text-[19px]">3.</span>
                <p className="ml-2">
                  <span className="font-[600] text-[19px]">Confirmation:</span>
                  &nbsp;Once your identity is verified, you will receive a
                  confirmation email acknowledging your account deletion
                  request.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-[500] text-[19px]">4.</span>
                <p className="ml-2">
                  <span className="font-[600] text-[19px]">
                    Retention Period:
                  </span>
                  &nbsp;Your account data will be retained for a period of 12 months
                  from the date of your deletion request. During this time, your
                  account will be deactivated, and access to your account will
                  be restricted.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-[500] text-[19px]">5.</span>
                <p className="ml-2">
                  <span className="font-[600] text-[19px]">Data Deletion:</span>
                  &nbsp;After the 12-month retention period, all personal data
                  associated with your account will be permanently deleted from
                  our systems.
                </p>
              </div>
            </div>

            <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
              Data to be Deleted:
            </h2>

            <ul className="pl-5 space-y-4 list-disc list-inside">
              <li className="font-[500] text-[19px]">
                <span className="font-[600]">Normal Sign-Up Credentials:</span> 
                &nbsp;Username, password, email address, phone number, etc.
              </li>
              <li className="font-[500] text-[19px]">
                <span className="font-[600]">User-Generated Data:</span> 
                &nbsp;This includes chats with pharmacists, prescription requests,
                medication orders, and any other user-generated content within
                the app.
              </li>
              <li className="font-[500] text-[19px]">
                <span className="font-[600]">Health Data Records:</span> 
                &nbsp;Any health data records stored within your account will also be
                deleted.
              </li>
            </ul>

            <h2 className="md:text-[36px] md:leading-[70px] font-[600] text-[22px]">
              Data Retention and Deletion Policy:
            </h2>
            <ul className="pl-5 space-y-4 list-disc list-inside">
              <li className="font-[500] text-[19px]">
                FlologPharma App adheres to a strict data retention policy to ensure the privacy and security of user data.
              </li>
              <li className="font-[500] text-[19px]">
                User data will only be retained for as long as necessary to fulfill the purposes outlined in our Privacy Policy or as required by law.
              </li>
              <li className="font-[500] text-[19px]">
                Any data that is no longer needed for these purposes will be securely deleted from our systems.
              </li>
            </ul>
          </div>
        </h4>
      </div>
    </div>
  );
};

export default Page;
