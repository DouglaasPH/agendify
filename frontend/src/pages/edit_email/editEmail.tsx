function EditEmailPage() {
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <h1 className=" w-full font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Edit e-mail
        </h1>
        <section className="w-full flex flex-col justify-between gap-3">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Current e-mail
            </p>
            <input
              type="email"
              placeholder=""
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              New e-mail
            </p>
            <input
              type="text"
              placeholder="douglas@email.com"
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Your password for identity confirmation
            </p>
            <input
              type="text"
              placeholder="Your password"
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-row justify-between">
            <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
              Cancel
            </button>
            <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
              Save Changes
            </button>
          </div>
        </section>
        <section>
          <p className="text-end font-inter font-regular text-[0.5rem] sm:text-[0.6rem] xl:text-[0.7rem] text-[#61738A] cursor-pointer">
            After the change, you will need to confirm the new email.
          </p>
        </section>
      </div>
    </div>
  );
}

export default EditEmailPage;
