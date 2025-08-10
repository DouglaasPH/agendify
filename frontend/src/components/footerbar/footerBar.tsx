import "../../css/font.css";

function FooterBar() {
  return (
    <div className="w-full h-25 xl:h-30 pt-4 pb-4 flex flex-col justify-center items-center border-t-1 border-t-[#E5E8EB]">
      <div className="w-70 xl:w-180 h-13 flex flex-row justify-between items-center">
        <button className="font-inter font-medium text-[0.6rem] xl:text-[0.7rem] cursor-pointer hover:opacity-75 text-[#61738A]">
          About us
        </button>
        <button className="font-inter font-medium text-[0.6rem] xl:text-[0.7rem] cursor-pointer hover:opacity-75 text-[#61738A]">
          Help center
        </button>
        <button className="font-inter font-medium text-[0.6rem] xl:text-[0.7rem] cursor-pointer hover:opacity-75 text-[#61738A]">
          Terms of use
        </button>
        <button className="font-inter font-medium text-[0.6rem] xl:text-[0.7rem] cursor-pointer hover:opacity-75 text-[#61738A]">
          Privacy policy
        </button>
      </div>
      <div>
        <p className="font-inter font-medium text-[0.6rem] xl:text-[0.7rem] text-[#61738A]">
          © 2025 Agendify. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default FooterBar;
