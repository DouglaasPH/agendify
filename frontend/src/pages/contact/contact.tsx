// vectors
import emailVector from "../../assets/vectors/email.svg";
import phoneVector from "../../assets/vectors/phone.svg";
import instagramVector from "../../assets/vectors/instagram.svg";

function ContactPage() {
  return (
    <div className="flex justify-center items-center px-4 mb-12">
      <div className="w-full max-w-[900px] mt-8 xl:mt-12 flex flex-col gap-8 p-6">
        <section className="w-full">
          <h1 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
            Get in touch
          </h1>
          <p className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
            Fill out the form below or use the contact information to contact
            us.
          </p>
        </section>
        <section className="flex flex-col xl:flex-row justify-between items-start gap-15 xl:gap-0">
          <div className="w-full xl:w-100 flex flex-col justify-between items-center gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
            <input
              type="email"
              placeholder="Your e-mail"
              className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
            <textarea
              name=""
              id=""
              className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A] border border-[#DBE0E5] rounded-lg p-2 h-30 w-full"
            />
            <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-full bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.8rem] xl:text-sm cursor-pointer">
              Send message
            </button>
          </div>
          <div className="w-full xl:w-60 h-full flex flex-row xl:flex-col items-start xl:items-center gap-10">
            <div className="w-1/2 xl:w-full flex flex-col items-start xl:items-center gap-2">
              <h5 className="w-full font-inter font-bold text-[1rem] xl:text-[1.3rem] text-[#121417]">
                Contact information
              </h5>
              <div className="flex flex-col gap-2 items-center">
                <div className="w-53 flex flex-row gap-2 items-center">
                  <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                    <img src={emailVector} alt="email vector" />
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                      E-mail
                    </h6>
                    <p className="font-inter font-normal text-[0.5rem] sm:text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                      contato@agendify.com
                    </p>
                  </div>
                </div>
                <div className="w-53 flex flex-row gap-2 items-center">
                  <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                    <img src={phoneVector} alt="phone number vector" />
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                      Phone Number
                    </h6>
                    <p className="font-inter font-normal text-[0.5rem] sm:text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                      +00 (00) 9000-0000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 xl:w-full flex flex-col items-start gap-2">
              <h5 className="w-full font-inter font-bold text-[1rem] xl:text-[1.3rem] text-[#121417]">
                Social Media
              </h5>
              <div className="flex flex-col items-center justify-between gap-1">
                <img
                  src={instagramVector}
                  alt="instagram vector"
                  className="bg-[#F0F2F5] rounded-[6rem] p-3 flex justify-center items-center"
                />
                <p className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Instagram
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
