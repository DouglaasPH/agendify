// font
import "../../css/font.css";

// avatars
import avatarOne from "../../assets/avatars/36.png";
import avatarTwo from "../../assets/avatars/35.png";
import avatarThree from "../../assets/avatars/1.png";

function AboutUsPage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-[3rem]">
      <div className="h-180 xl:h-250 w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-between items-center">
        <section className="w-full">
          <h1 className="w-full font-inter font-bold text-[1.5rem] xl:text-[2.5rem] text-[#121417]">
            About us
          </h1>
          <p className="font-inter font-normal text-[0.6rem] xl:text-[0.8rem] text-[#61738A]">
            Learn the story behind Agendify and our mission to simplify
            scheduling for freelancers.
          </p>
        </section>
        <section className=" h-[7rem] flex flex-col justify-between">
          <h2 className="w-full font-inter font-bold text-[1.2rem] xl:text-[1.5rem] text-[#121417]">
            Our History
          </h2>
          <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#121417]">
            Agendify was born from the need to simplify the scheduling process
            for freelancers. We realized that many professionals were spending
            valuable time on administrative tasks, such as managing schedules
            and responding to client requests, instead of focusing on their
            services. So, we created an intuitive and efficient platform to
            optimize time and increase productivity.
          </p>
        </section>
        <section className=" h-[5.2rem] xl:h-[5.5rem] flex flex-col justify-between">
          <h2 className="w-full font-inter font-bold text-[1.2rem] xl:text-[1.5rem] text-[#121417]">
            Our Mission
          </h2>
          <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#121417]">
            Our mission is to empower freelancers with tools that simplify
            business management. We want our users to have more time to focus on
            what they do best, while Agendify takes care of scheduling and
            organization.
          </p>
        </section>
        <section className=" h-[6rem] xl:h-[5.5rem] flex flex-col justify-between">
          <h2 className="w-full font-inter font-bold text-[1.2rem] xl:text-[1.5rem] text-[#121417]">
            Our Team
          </h2>
          <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#121417]">
            We're a team passionate about technology and innovation, committed
            to offering the best experience for our users. Our team is comprised
            of developers, designers, and customer service specialists, all
            working together to make Agendify the best scheduling platform on
            the market.
          </p>
        </section>
        <section className="w-full h-[8rem] xl:h-[15rem] flex flex-row justify-between items-center">
          <div className="h-full flex flex-col justify-between items-center">
            <img
              src={avatarOne}
              alt="avatar"
              className="w-[6rem] xl:w-[12rem]"
            />
            <h6 className="font-inter font-medium text-[0.6rem] xl:text-[0.8rem] text-[#121417]">
              Douglas Phelipe
            </h6>
            <p className="font-inter font-medium text-[0.5rem] xl:text-[0.7rem] text-[#61738A]">
              CEO
            </p>
          </div>
          <div className="h-full flex flex-col justify-between items-center">
            <img
              src={avatarTwo}
              alt="avatar"
              className="w-[6rem] xl:w-[12rem]"
            />
            <h6 className="font-inter font-medium text-[0.6rem] xl:text-[0.8rem] text-[#121417]">
              Ana Silva
            </h6>
            <p className="font-inter font-medium text-[0.5rem] xl:text-[0.7rem] text-[#61738A]">
              CTO
            </p>
          </div>
          <div className="h-full flex flex-col justify-between items-center">
            <img
              src={avatarThree}
              alt="avatar"
              className="w-[6rem] xl:w-[12rem]"
            />
            <h6 className="font-inter font-medium text-[0.6rem] xl:text-[0.8rem] text-[#121417]">
              Ricardo Almeida
            </h6>
            <p className="font-inter font-medium text-[0.5rem] xl:text-[0.7rem] text-[#61738A]">
              Head de Marketing
            </p>
          </div>
        </section>
        <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.55rem] xl:text-sm cursor-pointer">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default AboutUsPage;
