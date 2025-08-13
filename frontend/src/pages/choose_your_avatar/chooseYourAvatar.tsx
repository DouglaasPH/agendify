import { useState } from "react";

function ChooseYourAvatarPage() {
  const avatarPath = "../../../public/avatars/";
  const [chosenAvatar, SetChosenAvatar] = useState<number | null>(null);

  const toogleAvatar = (avatar: number) => {
    SetChosenAvatar(chosenAvatar === avatar ? null : avatar);
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-7">
        <h1 className="text-center font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
          Choose your avatar
        </h1>
        <div className="flex flex-row flex-wrap gap-4 xl:gap-6">
          {Array.from({ length: 37 }).map((_, index) => (
            <button value={index}>
              <img
                src={avatarPath + index + ".png"}
                alt={"avatar " + index}
                className={`w-20 xl:w-40 cursor-pointer hover:opacity-95 rounded-full transition-all duration-300 border ${
                  chosenAvatar == index
                    ? "border-[#0D78F2]"
                    : "border-transparent"
                }`}
                onClick={() => toogleAvatar(index)}
              />
            </button>
          ))}
        </div>
        <button className="p-3 pl-3 xl:pl-4 pr-3 xl:pr-4 w-45 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
}

export default ChooseYourAvatarPage;
