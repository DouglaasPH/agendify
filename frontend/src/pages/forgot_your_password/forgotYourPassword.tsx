function ForgotYourPasswordPage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-180 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-7">
        <h1 className=" w-full text-center font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Forgot your password?
        </h1>
        <p className="text-center font-inter font-regular text-[0.8rem] sm:text-[0.7rem] xl:text-[0.9rem] text-[#61738A]">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#E8EDF5] rounded-md p-2 w-full"
        />
        <section className="w-full flex flex-row justify-between">
          <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[10rem] sm:w-[10rem] xl:w-[12rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            Return to login
          </button>
          <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[10rem] sm:w-[10rem] xl:w-[12rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            Send reset link
          </button>
        </section>
      </div>
    </div>
  );
}

export default ForgotYourPasswordPage;
