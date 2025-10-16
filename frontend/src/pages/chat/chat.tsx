import { useEffect, useRef, useState } from "react";

function ChatPage() {
  const [messages, SetMessages] = useState([
    {
      sender: "assistant",
      text: "Hi! I'm Agendify's virtual assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() == "") return;

    SetMessages([...messages, { sender: "user", text: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] pt-20 xl:pb-15">
      <div className="h-full w-135 sm:w-200 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-between items-center gap-20">
        <h1 className="text-center font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
          Scheduling Assistant
        </h1>
        <section className="w-full flex flex-col gap-10 pb-20">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`font-inter font-normal text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] p-2 rounded-lg max-w-[25rem] break-words ${
                msg.sender === "user"
                  ? "bg-blue-500 text-[#FFFFFF] self-end"
                  : "bg-gray-300 text-[#121417] self-start"
              }`}
            >
              {msg.text}
            </p>
          ))}
          <div ref={messagesEndRef} className="w-0 h-0" />
        </section>
        <section className="bottom-0 fixed w-135 sm:w-160 xl:w-270 h-20 sm:h-20 xl:h-18 bg-[#FFFFFF]">
          <div className="w-full h-15 sm:h-14 xl:h-13 bg-[#F0F2F5] rounded-lg flex flex-row justify-between items-center pl-5 pr-5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="h-10 xl:w-247 font-inter font-semibold text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A] outline-none focus:ring-0"
            />
            <button
              onClick={handleSend}
              className="bg-[#0D78F2] h-9 w-12 sm:h-9 sm:w-12 xl:h-9 xl:w-13 flex justify-center items-center rounded-xl cursor-pointer hover:opacity-95"
            ></button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChatPage;
