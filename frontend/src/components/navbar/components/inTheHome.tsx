import "../../../css/font.css";

function InTheHomePage() {
  return (
    <div className="w-65 xl:w-110 h-11 flex flex-row justify-between items-center">
      <button className="font-inter font-medium text-[0.55rem] xl:text-sm cursor-pointer hover:opacity-75">
        Home
      </button>
      <button className="font-inter font-medium text-[0.55rem] xl:text-sm cursor-pointer hover:opacity-75">
        About us
      </button>
      <button className="font-inter font-medium text-[0.55rem] xl:text-sm cursor-pointer hover:opacity-75">
        FAQ
      </button>
      <div className="w-33 xl:w-52 flex flex-row  justify-between items-center">
        <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.55rem] xl:text-sm cursor-pointer">
          Create Account
        </button>
        <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 bg-[#F0F2F5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.55rem] xl:text-sm cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
}

export default InTheHomePage;
