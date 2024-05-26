import { AiOutlineMail } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


const Success = () => {
  return (
    <section className="bg-black text-white flex items-center justify-center h-screen w-screen text-[16px] relative">
      <main className="flex flex-col gap-5 relative">
        <button className="absolute top-[-5%] right-0">
        <IoMdClose  />
        </button>
        <div className="mx-auto bg-green rounded-full w-[80px] p-[20px]">
          <img className="max-w-full" src="/images/check.svg" alt="close" />
        </div>
        <p className="mx-auto text-[1.9rem] leading-[35px] text-center ">
          {"We've added you to our waiting list!"}
        </p>
        <p className="mx-auto text-center text-[.85rem] text-[#AEAAAE] mb-6">
          {"We'll let you know when Revas is ready."}
        </p>
        <div className="flex flex-col items-center p-[15px] bg-[#262626] rounded-md gap-5">
          <div className="bg-black w-full flex items-center gap-6 text-[0.8rem] p-3">
            <AiOutlineMail size={16} />
            <span>hello@revasexchange.com</span>
          </div>
          <p className="text-center max-w-[412px] text-[.85rem] text-[#AEAAAE]">
            Thank you for joining our business waiting list. We appreciate your
            interest and look forward to serving you soon!
          </p>
        </div>
      </main>
    </section>
  );
};

export default Success;
