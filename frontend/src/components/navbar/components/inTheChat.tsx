import "../../../css/font.css";
import img from "../../../assets/vectors/question.svg";

function InTheChatPage() {
  return (
    <button className="p-3 bg-[#F0F2F5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-sm cursor-pointer">
      <img src={img} alt="question" className="w-5" />
    </button>
  );
}

export default InTheChatPage;
