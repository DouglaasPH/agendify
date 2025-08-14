function ResetPasswordWithoutLoginPage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-180 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-7">
        <h1 className=" w-full text-center font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Reset Password
        </h1>
        <section className="flex flex-col justify-between gap-3 w-full">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              New password
            </p>
            <input
              type="text"
              placeholder="New password"
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Confirm new password
            </p>
            <input
              type="text"
              placeholder="Confirm new password"
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
        </section>
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

export default ResetPasswordWithoutLoginPage;
