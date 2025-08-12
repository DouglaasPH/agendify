// font
import "../../css/font.css";

function PrivacyPolicyPage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] mb-[8rem] xl:p-0">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <h1 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
              Privacy Policy
            </h1>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              Agendify values the privacy of its users and is committed to
              protecting the personal information we collect. This Privacy
              Policy describes how we collect, use, share, and protect your data
              when you use our platform.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              Information Collected
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              We use your information to provide and improve our services,
              personalize your experience, communicate with you, and ensure the
              security of the platform. Your data will not be shared with third
              parties without your consent, except when necessary to comply with
              legal obligations.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              Security
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              We implement security measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              Your Rights
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights or if you have any questions
              about this Privacy Policy, please contact us through our support
              channels.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              Policy Changes
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes. Your continued use of the
              platform after the changes are posted constitutes your acceptance
              of the new Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
