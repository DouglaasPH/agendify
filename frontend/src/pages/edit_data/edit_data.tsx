function EditDataPage() {
  const data_user = {
    name: "Douglas Phelipe",
    phone_number: "(00) 90000-0000",
    profession: "Dev Full Stack",
    user_avatar_path: "../../../public/avatars/1.png",
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <h1 className=" w-full font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Edit Profile Data
        </h1>
        <section className="flex flex-col items-center gap-3">
          <img
            src={data_user.user_avatar_path}
            alt="user avatar"
            className="w-30 sm:w-35 xl:w-45"
          />
          <div className="flex flex-col justify-between items-center">
            <h4 className="font-inter font-bold text-[1.1rem] sm:text-[1.2rem] xl:text-[1.3rem] text-[#121417]">
              {data_user.name}
            </h4>
            <p className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A]">
              {data_user.profession}
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col justify-between gap-3">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Name
            </p>
            <input
              type="text"
              placeholder={data_user.name}
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#E8EDF5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Phone Number
            </p>
            <input
              type="text"
              placeholder={data_user.phone_number}
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#E8EDF5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Profession
            </p>
            <input
              type="text"
              placeholder={data_user.profession}
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#E8EDF5] rounded-md p-2 w-full"
            />
          </div>
        </section>
        <section className="w-full flex flex-row justify-between">
          <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            Cancel
          </button>
          <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            Save Changes
          </button>
        </section>
      </div>
    </div>
  );
}

export default EditDataPage;
