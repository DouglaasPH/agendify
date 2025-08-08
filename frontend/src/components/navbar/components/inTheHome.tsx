import "../../../css/font.css";

function InTheHomePage() {
  return (
    <div className="w-115 h-11 flex flex-row justify-between items-center">
      <button className="font-inter font-medium text-sm cursor-pointer hover:opacity-75">
        Home
      </button>
      <button className="font-inter font-medium text-sm cursor-pointer hover:opacity-75">
        About us
      </button>
      <button className="font-inter font-medium text-sm cursor-pointer hover:opacity-75">
        FAQ
      </button>
      <div className="w-57 flex flex-row  justify-between items-center">
        <button className="p-2.5 pl-4 pr-4 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-sm cursor-pointer">
          Create Account
        </button>
        <button className="p-2.5 pl-4 pr-4 bg-[#F0F2F5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-sm cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
}

export default InTheHomePage;
