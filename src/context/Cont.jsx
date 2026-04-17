"use client"
import { fdsContext } from "@/context/ContextProvider";
import { use, useState } from "react";

const Cont = () => {
    const { data } = use(fdsContext);
    const [filter, setFilter] = useState("All");

    return (
        /* Responsive container: 
           Using max-w and mx-auto ensures it stays centered and readable on large screens 
        */
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Timeline
                </h1>

                {/* Styled Select Dropdown */}
                <div className="relative w-full md:w-64">
                    <select 
                        onChange={(e) => setFilter(e.target.value)} 
                        defaultValue="All" 
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer transition-all"
                    >
                        <option value="All">All Activities</option>
                        <option value="Call">Calls</option>
                        <option value="Text">Texts</option>
                        <option value="Video Call">Video Calls</option>
                    </select>
                    {/* Custom Arrow Decoration */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        ▼
                    </div>
                </div>
            </div>

            {/* Timeline List */}
            <div className="space-y-4">
                {data.map((item, index) => {
                    if (filter !== "All" && item.action !== filter) {
                        return null;
                    }

                    return (
                        <div 
                            key={index} 
                            className="group flex items-center gap-4 md:gap-6 bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-emerald-100"
                        >
                            {/* Icon Container */}
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-slate-50 rounded-xl text-2xl md:text-3xl text-[#1D3C33] group-hover:bg-emerald-50 transition-colors">
                                {item.icon}
                            </div>

                            {/* Event Details */}
                            <div className="flex-grow">
                                <h3 className="text-lg md:text-2xl font-bold text-slate-800">
                                    {item.friend.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                        {item.action}
                                    </span>
                                    <span className="text-slate-400 text-xs md:text-sm">
                                        • Just now
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Empty State */}
                {data.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-500 font-medium">No interactions recorded yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cont;