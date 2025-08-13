// font
import "../../css/font.css";

function AcceptTermsOfUsePage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] mb-[8rem] xl:p-0">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center gap-10">
          <div>
            <h1 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
              Terms of use
            </h1>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              Welcome to Agendify! By using our platform, you agree to the
              following terms and conditions. Please read them carefully before
              proceeding.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              1. Acceptance of Terms
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              By accessing or using Agendify, you agree to comply with these
              Terms of Use and all applicable laws and regulations. If you do
              not agree to these terms, you may not use our services.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              2. Service Description
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              Agendify is a platform that allows freelancers to manage their
              appointments, clients, and services. We offer tools to facilitate
              the organization and growth of your business.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              3. User Obligations
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              4. Privacy
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              We respect your privacy and protect your personal information. Our
              Privacy Policy details how we collect, use, and protect your data.
            </p>
          </div>
          <div>
            <h2 className="font-inter font-bold text-[1.2rem] sm:text-[1.7rem] xl:text-[1.3rem] text-[#121417]">
              5. Changes to the Terms
            </h2>
            <p className="font-inter font-regular text-[0.65rem] sm:text-[0.75rem] xl:text-[0.85rem] text-[#121417]">
              We may update these Terms of Use from time to time. We will notify
              you of any significant changes. Your continued use of the platform
              after such changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
        <button className="p-3 pl-3 xl:pl-4 pr-3 xl:pr-4 w-35 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
          Accept terms
        </button>
      </div>
    </div>
  );
}

export default AcceptTermsOfUsePage;
