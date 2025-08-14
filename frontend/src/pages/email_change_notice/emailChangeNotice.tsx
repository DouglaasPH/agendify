function EmailChangeNoticePage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20 h-[33vw]">
      <div className="w-92 sm:w-140 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <h1 className=" w-full text-center font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Someone requested an email change
        </h1>
        <p className="text-center font-inter font-regular text-[0.8rem] sm:text-[0.7rem] xl:text-[0.9rem] text-[#61738A]">
          If you did not request this change, please click the button below to
          cancel the request.
        </p>
        <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
          Cancel request
        </button>
      </div>
    </div>
  );
}

export default EmailChangeNoticePage;
