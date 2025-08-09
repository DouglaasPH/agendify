// react imports
import { useEffect, useRef, useState } from "react";

// font
import "../../css/font.css";

// banners
import mainBanner from "../../assets/banners/banner-5.jpg";
import barberShopsBanner from "../../assets/banners/banner-1.jpg";
import manicuresBanner from "../../assets/banners/banner-4.jpg";
import privateTeacherBanner from "../../assets/banners/banner-3.jpg";

// vectors
import calendar from "../../assets/vectors/calendar.svg";
import clock from "../../assets/vectors/clock.svg";
import groupOfPeople from "../../assets/vectors/group-of-people.svg";
import starWithBackground from "../../assets/vectors/star-with-background.svg";
import starWithoutBackground from "../../assets/vectors/start-without-background.svg";

// avatars
import avatarOne from "../../assets/avatars/38.png";
import avatarTwo from "../../assets/avatars/39.png";

function HomePage() {
  const mainBannerRef = useRef<HTMLImageElement | null>(null);
  const [mainBannerTop, setMainBannerTop] = useState(0);
  const [mainBannerHeight, setMainBannerHeight] = useState(0);
  const widthScreen = window.innerWidth;

  useEffect(() => {
    if (mainBannerRef.current) {
      const current = mainBannerRef.current.getBoundingClientRect();
      setMainBannerTop(current.top);
      setMainBannerHeight(current.height);
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
        <section className="w-full">
          <img
            src={mainBanner}
            alt="main banner"
            ref={mainBannerRef}
            className="w-full"
          />
          <div
            className="w-full xl:w-270 absolute flex flex-col justify-between items-center"
            style={{
              top:
                widthScreen < 640
                  ? mainBannerTop + 35
                  : widthScreen >= 1280
                  ? mainBannerTop + 160
                  : 0,
              height:
                widthScreen < 640
                  ? mainBannerHeight - 70
                  : widthScreen >= 1280
                  ? mainBannerHeight - 285
                  : 0,
            }}
          >
            <h1 className="w-full font-inter font-black text-center xl:text-[3.5rem] text-[1.3rem] text-[#FFFFFF]">
              Agendify: Simplify your schedule, maximize your time
            </h1>
            <p className="font-inter font-light text-center xl:text-[1rem] text-[0.5rem] text-[#FFFFFF]">
              Agendify is the smart scheduling platform for freelancers. Manage
              your schedule, attract more clients, and focus on what you do
              best.
            </p>
            <button className="p-[0.2rem] xl:p-3 pl-[0.3rem] xl:pl-7 pr-[0.3rem] xl:pr-7 bg-[#0D78F2] hover:opacity-95 rounded-sm xl:rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] xl:text-sm cursor-pointer">
              Start now
            </button>
          </div>
        </section>
        <section className="w-full h-135 xl:h-95 flex flex-col justify-between ">
          <div className="w-full">
            <h2 className="w-full font-inter font-black text-[1.5rem] xl:text-[3rem] text-[#121417]">
              How agendify works
            </h2>
            <p className="w-full font-inter font-normal text-[0.70rem] xl:text-[0.95rem] text-[#121417]">
              With Agendify, you have complete control over your schedule. See
              how easy it is:
            </p>
          </div>
          <div className="h-110 xl:h-60 flex xl:flex-row flex-col justify-between items-center">
            <div className="w-85 h-35 xl:w-85 p-4 flex flex-col justify-evenly border-1 border-[#DBE0E5] rounded-lg xl:rounded-lg">
              <img src={calendar} alt="calendar" className="w-4 xl:w-5" />
              <h4 className="font-inter font-bold text-[0.7rem] xl:text-[0.9rem] text-[#121417]">
                Create your schedule
              </h4>
              <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                Set your business hours, services, and prices. Customize your
                scheduling page with your brand. Animated illustration showing a
                calendar being populated with appointments.
              </p>
            </div>
            <div className="w-85 h-35 xl:w-85 p-4 flex flex-col justify-evenly border-1 border-[#DBE0E5] rounded-lg">
              <img src={clock} alt="clock" className="w-4 xl:w-5" />
              <h4 className="font-inter font-bold text-[0.7rem] xl:text-[0.9rem] text-[#121417]">
                Share your link
              </h4>
              <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                Share your unique link on social media, your website, or email.
                Your customers can see your availability in real time. Animated
                illustration showing a link being shared across social media
                platforms.
              </p>
            </div>
            <div className="w-85 h-35 xl:w-85 p-4 flex flex-col justify-evenly border-1 border-[#DBE0E5] rounded-lg">
              <img
                src={groupOfPeople}
                alt="group of people"
                className="w-5 xl:w-6"
              />
              <h4 className="font-inter font-bold text-[0.7rem] xl:text-[0.9rem] text-[#121417]">
                Receive Appointments
              </h4>
              <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                Receive notifications of new appointments and manage your
                schedule from anywhere. No conflicts, no stress. Animated
                illustration showing notifications popping up on a phone and a
                calendar being updated.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full h-225 xl:h-105 flex flex-col justify-between">
          <div className="w-full">
            <h2 className="w-full font-inter font-black text-[1.5rem] xl:text-[3rem] text-[#121417]">
              Benefits for self-employed professionals
            </h2>
            <p className="w-full font-inter font-normal text-[0.70rem] xl:text-[0.95rem] text-[#121417]">
              Agendify is the ideal tool for professionals like:
            </p>
          </div>
          <div className="h-190 xl:h-70 flex flex-col xl:flex-row justify-between items-center">
            <div className="h-55 xl:h-full w-70 xl:w-87 flex flex-col justify-between">
              <img src={barberShopsBanner} alt="barber shops" className="" />
              <div className="flex flex-col justify-between h-13 xl:h-17">
                <h5 className="font-inter font-medium text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Barber shops
                </h5>
                <p className="font-inter font-normal text-[0.7rem] xl:text-[0.9rem] text-[#61738A]">
                  Manage schedules, avoid delays, and offer personalized
                  service.
                </p>
              </div>
            </div>
            <div className="h-55 xl:h-full w-70 xl:w-87 flex flex-col justify-between">
              <img src={manicuresBanner} alt="manicures" />
              <div className="flex flex-col justify-between h-13 xl:h-17">
                <h5 className="font-inter font-medium text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Manicures
                </h5>
                <p className="font-inter font-normal text-[0.7rem] xl:text-[0.9rem] text-[#61738A]">
                  Schedule clients efficiently, organize your services, and
                  increase your revenue.
                </p>
              </div>
            </div>
            <div className="h-55 xl:h-full w-70 xl:w-87 flex flex-col justify-between">
              <img src={privateTeacherBanner} alt="private teacher" />
              <div className="flex flex-col justify-between h-13 xl:h-17">
                <h5 className="font-inter font-medium text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Private teacher
                </h5>
                <p className="font-inter font-normal text-[0.7rem] xl:text-[0.9rem] text-[#61738A]">
                  Make scheduling classes easier, track student progress, and
                  optimize your time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-90 flex flex-col gap-5">
          <h4 className="w-full font-inter font-bold text-[1.2rem] xl:text-[1.5rem] text-[#121417]">
            Testimonials
          </h4>
          <div className="h-58 flex flex-col justify-between">
            <div className="w-full h-25 flex flex-col justify-between">
              <div className="flex gap-3 items-center">
                <img src={avatarOne} alt="avatar one" />
                <div className="flex flex-col">
                  <p className="font-inter font-normal text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                    Sofia Almeida
                  </p>
                  <p className="font-inter font-normal text-[0.65rem] xl:text-[0.75rem] text-[#61738A]">
                    2 months later
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
              </div>
              <div>
                <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#121417]">
                  Agendify has transformed the way I manage my barbershop. My
                  clients love the ease of online scheduling, and I have more
                  time to focus on my work.
                </p>
              </div>
            </div>
            <div className="w-full h-25 flex flex-col justify-between">
              <div className="flex gap-3 items-center">
                <img src={avatarTwo} alt="avatar two" />
                <div className="flex flex-col">
                  <p className="font-inter font-normal text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                    Carlos Mendes
                  </p>
                  <p className="font-inter font-normal text-[0.65rem] xl:text-[0.75rem] text-[#61738A]">
                    3 months later
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithBackground} alt="star" className="w-4" />
                <img src={starWithoutBackground} alt="star" className="w-4" />
              </div>
              <div>
                <p className="font-inter font-normal text-[0.6rem] xl:text-[0.9rem] text-[#121417]">
                  As a barber, Agendify has helped me organize my schedule and
                  attract new clients. I recommend it to any self-employed
                  professional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
