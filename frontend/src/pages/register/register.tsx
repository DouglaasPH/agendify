// font
import "../../css/font.css";

function RegisterPage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-7">
        <h1 className="text-center font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[1.8rem] text-[#121417]">
          Create your account
        </h1>
        <section className="flex flex-col items-center gap-5 w-full xl:w-1/3">
          <input
            type="text"
            placeholder="Full name"
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Profession"
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full"
          />
        </section>
        <section className="w-full xl:w-1/3 flex flex-col justify-between items-center gap-3">
          <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-full bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            Register
          </button>
          <p className="text-end font-inter font-regular text-[0.6rem] sm:text-[0.5rem] xl:text-[0.7rem] text-[#61738A] cursor-pointer">
            Don't have an account?{" "}
            <button className="underline cursor-pointer">Register</button>
          </p>
        </section>
      </div>
    </div>
  );
}

export default RegisterPage;
