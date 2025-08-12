import { useState } from "react";

// font
import "../../css/font.css";

// vector
import arrowVector from "../../assets/vectors/arrow.svg";

function HelpCenterPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqData = [
    {
      id: "one",
      question: "What is the Agendify?",
      answer:
        "Agendify is an intelligent scheduling platform designed for self-employed professionals, allowing clients to book appointments easily, quickly, and without the need to create an account.",
    },
    {
      id: "two",
      question: "How do I book an appointment?",
      answer:
        "Simply access the professional’s booking link, interact with the virtual assistant, and answer questions about date and time. At the end, you’ll receive a confirmation via email.",
    },
    {
      id: "three",
      question: "How do I create my availability?",
      answer:
        "In the professional’s dashboard, go to 'My Availabilities' and click 'Create new availability.' Choose the date, start time, end time, and the duration of each slot.",
    },
    {
      id: "four",
      question: "How do I cancel or reschedule an appointment?",
      answer:
        "Access the link in your confirmation email and follow the instructions to cancel or reschedule your appointment.",
    },
    {
      id: "five",
      question: "How do I recover my password?",
      answer:
        "On the login screen, click 'Forgot my password' and follow the instructions sent to your registered email.",
    },
    {
      id: "six",
      question: "Is booking free?",
      answer:
        "Yes, using Agendify to book appointments with professionals is completely free for clients.",
    },
  ];

  return (
    <div className="flex justify-center items-center px-4 mb-12">
      <div className="w-full max-w-[900px] mt-8 xl:mt-12 flex flex-col gap-8 p-6">
        <section className="w-full">
          <h1 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
            Help Center
          </h1>
          <p className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A]">
            Find answers to your questions or contact us for personalized
            support.
          </p>
        </section>

        <section className="w-full flex flex-col gap-6">
          <h5 className="font-inter font-bold text-[1.2rem] sm:text-[1.4rem] xl:text-[1.5rem] text-[#121417]">
            Frequently Asked Questions
          </h5>

          <div className="flex flex-col gap-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border border-[#DBE0E5] rounded-lg cursor-pointer overflow-hidden"
                onClick={() => toggleQuestion(item.id)}
              >
                <div className="flex justify-between items-center p-3">
                  <p className="font-inter font-normal text-[0.9rem] sm:text-[0.95rem] xl:text-[0.9rem] text-[#121417]">
                    {item.question}
                  </p>
                  <img
                    src={arrowVector}
                    alt="arrow vector"
                    className="w-[1.2rem] sm:w-[1rem] transition-transform duration-300"
                    style={{
                      transform:
                        openQuestion === item.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </div>

                <div
                  className={`px-3 pb-3 font-inter text-[#61738A] text-[0.85rem] sm:text-[0.9rem] xl:text-[0.8rem] transition-all duration-300 ease-in-out`}
                  style={{
                    maxHeight: openQuestion === item.id ? "500px" : "0px",
                    opacity: openQuestion === item.id ? 1 : 0,
                  }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col gap-6">
          <h5 className="font-inter font-bold text-[1.2rem] sm:text-[1.4rem] xl:text-[1.5rem] text-[#121417]">
            Need help? Get in touch
          </h5>
          <p className="font-inter font-normal text-[0.8rem] sm:text-[0.9rem] xl:text-[1rem] text-[#121417]">
            Our support team is ready to help. Average response time is 24
            hours.
          </p>
          <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-30 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.8rem] xl:text-sm cursor-pointer">
            Contact us
          </button>
        </section>
      </div>
    </div>
  );
}

export default HelpCenterPage;
