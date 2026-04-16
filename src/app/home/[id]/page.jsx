import Buttons from "@/components/shared/Button.jsx/Buttons";
import Image from "next/image";
import { BsArchive } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiDeleteBin4Line } from "react-icons/ri";
import fdData from '../../../../public/fd.json';

const FdDetails = async ({ params }) => {
    const { id } = await params;
    const fd = fdData.find((f) => f.id == id);

    const statusColor = {
        overdue: "bg-red-100 text-red-600 rounded-2xl py-1 text-[13px] md:text-[15px] font-bold",
        "on-track": "bg-green-100 text-green-700 rounded-2xl py-1 text-[13px] md:text-[15px] font-bold",
        "almost-due": "bg-amber-100 text-amber-700 rounded-2xl py-1 text-[13px] md:text-[15px] font-bold",
    };

    return (
        // Adjusted padding and width for mobile-first responsiveness
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 mt-10 md:mt-20 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-10">
                
                {/* LEFT COLUMN: Profile Section */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    <div className="card bg-base-100 shadow-md flex items-center justify-center transition duration-300 ease-in-out md:hover:-translate-y-2 hover:shadow-xl border border-slate-50">
                        <div className="card-body text-center space-y-3 p-6">
                            <Image 
                                src={fd.picture} 
                                width={120} 
                                height={120} 
                                className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32 mx-auto border-4 border-white shadow-sm" 
                                alt="Friend Profile"
                            />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1D3C33]">{fd.name}</h2>
                            <p className="text-sm md:text-base text-slate-500 italic">"{fd.bio}"</p>
                          
                            <div className="flex flex-col gap-2 pt-2">
                                <p className={`${statusColor[fd.status.toLowerCase()]} w-full sm:w-8/12 mx-auto uppercase tracking-wide`}>
                                    {fd.status}
                                </p>
                                <p className="w-full sm:w-8/12 mx-auto text-xs md:text-sm py-1 bg-[#244D3F] text-white rounded-full font-medium">
                                    {fd.tags.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Sidebars: Responsive sizing for text and icons */}
                    <div className="space-y-3">
                        <div className="card bg-white shadow-sm py-4 px-6 border border-slate-100 flex-row items-center gap-4 cursor-pointer hover:bg-slate-50 transition">
                            <MdOutlineNotificationsActive className="text-2xl text-slate-600" />
                            <h1 className="text-lg font-bold">Snooze 2 weeks</h1>
                        </div>
                        <div className="card bg-white shadow-sm py-4 px-6 border border-slate-100 flex-row items-center gap-4 cursor-pointer hover:bg-slate-50 transition">
                            <BsArchive className="text-2xl text-slate-600" />
                            <h1 className="text-lg font-bold">Archive</h1>
                        </div>
                        <div className="card bg-white shadow-sm py-4 px-6 border border-slate-100 flex-row items-center gap-4 cursor-pointer hover:bg-red-50 transition group">
                            <RiDeleteBin4Line className="text-2xl text-red-400 group-hover:text-red-600" />
                            <h1 className="text-lg font-bold text-red-500">Delete</h1>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Stats & Details */}
                <div className="w-full lg:col-span-4 space-y-6 md:space-y-8">
                    
                    {/* Top Stats Grid: 1 col on mobile, 3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { label: "Days Since Contact", value: fd.days_since_contact },
                            { label: "Goal (Days)", value: fd.goal },
                            { label: "Next Due", value: fd.next_due_date, isDate: true }
                        ].map((item, idx) => (
                            <div key={idx} className="card bg-white shadow-sm p-6 border border-slate-100 text-center transition hover:shadow-md">
                                <h1 className={`${item.isDate ? 'text-2xl' : 'text-5xl'} font-bold text-[#1D3C33] mb-2`}>
                                    {item.value}
                                </h1>
                                <h1 className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{item.label}</h1>
                            </div>
                        ))}
                    </div>

                    {/* Relationship Goal Card */}
                    <div className="card bg-white shadow-sm border border-slate-100 transition hover:shadow-md">
                        <div className="p-6 md:p-8 space-y-4">
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl md:text-2xl font-bold text-[#2D4D3D]">Relationship Goal</h1>
                                <button className="btn btn-sm md:btn-md bg-slate-100 hover:bg-slate-200 border-none text-slate-700">Edit</button>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <h1 className="text-base md:text-lg text-slate-600">
                                    You aim to connect every <span className="text-[#1D3C33] font-bold">{fd.goal} days</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Quick Check-In: Centered for all devices */}
                    <div className="card bg-white shadow-sm border border-slate-100 transition hover:shadow-md p-6 md:p-8">
                        <p className="text-xl md:text-2xl font-bold text-[#2D4D3D] mb-6">Quick Check-In</p>
                        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
                            <Buttons fdsData={fd}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FdDetails;