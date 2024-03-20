import { IoIosSend } from "react-icons/io";
import { Message } from "@/app/(pages)/_components/inbox/message";
import { Input } from "@/components/ui/input";

function Conversation() {
  return (
    <>
      <div className="max-h-[450px] overflow-scroll flex flex-col space-y-4 hidden-scrollbar mb-4">
        {[...Array(20)].map((item, idx) => (
          <Message key={idx} i={idx} message="" />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 py-10 w-full">
        <div className="flex justify-center gap-2 max-container">
          <Input
            className="border border-gray-300 outline-none w-full resize-none"
            placeholder="Message"
          />
          <button className="flexCenter gap-1 bg-primary hover:bg-primary-dark text-white px-5 rounded-md">
            Send <IoIosSend />
          </button>
        </div>
      </div>
    </>
  );
}

export default Conversation;
