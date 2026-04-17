"use client"
import { fdsContext } from "@/context/ContextProvider";
import { use } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { toast } from "react-toastify";

const Buttons = ({ fdsData }) => {
    const { setData } = use(fdsContext)

    const notify = () => toast.success(`📞 Calling ${fdsData.name}`);
    const notify2 = () => toast.success(`💬 Text ${fdsData.name}`);
    const notify3 = () => toast.success(`🎥 Starting Video Call with ${fdsData.name}`);

    // Shared base styles for the action buttons to ensure consistency
    const btnBase = "flex flex-col items-center justify-center gap-2 p-6 md:p-8 lg:p-10 rounded-xl transition-all hover:scale-[1.02] active:scale-95 cursor-pointer border border-transparent hover:border-slate-200 shadow-sm";

    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            {/* Call Action */}
            <div 
                onClick={() => {
                    setData((data) => [...data, { friend: fdsData, action: "Call", icon: <BiPhoneCall /> }]);
                    notify();
                }} 
                className={`${btnBase} bg-slate-50 text-slate-700`}
            >
                <BiPhoneCall className="text-2xl md:text-3xl lg:text-4xl" />
                <p className="text-xs md:text-sm lg:text-base font-semibold">Call</p>
            </div>

            {/* Text Action */}
            <div 
                onClick={() => {
                    setData((data) => [...data, { friend: fdsData, action: "Text", icon: <BsChatSquareText /> }]);
                    notify2();
                }} 
                className={`${btnBase} bg-slate-50 text-slate-700`}
            >
                <BsChatSquareText className="text-2xl md:text-3xl lg:text-4xl" />
                <p className="text-xs md:text-sm lg:text-base font-semibold">Text</p>
            </div>

            {/* Video Action */}
            <div 
                onClick={() => {
                    setData((data) => [...data, { friend: fdsData, action: "Video Call", icon: <MdVideoCall /> }]);
                    notify3();
                }} 
                className={`${btnBase} bg-slate-50 text-slate-700`}
            >
                <MdVideoCall className="text-2xl md:text-3xl lg:text-4xl" />
                <p className="text-xs md:text-sm lg:text-base font-semibold">Video</p>
            </div>
        </div>
    );
};

export default Buttons;