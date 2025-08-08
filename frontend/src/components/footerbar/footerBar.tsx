import "../../css/font.css";

function FooterBar() {
  return (
    <div className="w-full h-35 pt-7 pb-7 flex flex-col justify-between items-center border-t-2 border-t-[#E5E8EB]">
      <div className="w-180 h-11 flex flex-row justify-between items-center">
        <button className="font-inter font-medium text-md cursor-pointer hover:opacity-75 text-[#61738A]">
          About us
        </button>
        <button className="font-inter font-medium text-md cursor-pointer hover:opacity-75 text-[#61738A]">
          Support
        </button>
        <button className="font-inter font-medium text-md cursor-pointer hover:opacity-75 text-[#61738A]">
          Terms of use
        </button>
        <button className="font-inter font-medium text-md cursor-pointer hover:opacity-75 text-[#61738A]">
          Privacy policy
        </button>
      </div>
      <div>
        <p className="font-inter font-medium text-md text-[#61738A]">
          © 2025 Agendify. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default FooterBar;
