// lucide
import { Calendar } from "lucide-react";

function LogoComponent() {
  return (
    <section className="flex gap-3 items-center select-none">
      <div className="text-center bg-gradient-to-b from-black/70 to-gray-800 p-1.5 rounded-lg">
        <Calendar size={20} strokeWidth={2} className="text-white" />
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black">
        Agendify
      </h4>
    </section>
  );
}

export default LogoComponent;
