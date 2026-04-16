"use client"
import { fdsContext } from "@/context/ContextProvider";
import { use, useState } from "react";
const Cont = () => {

    const { data } = use(fdsContext)
    const [filter, setFilter] = useState("All");
    

    return (
        <div className="space-y-5 mb-10 mt-10 sm:m-15">
            <h1 className="text-5xl font-bold">TimeLine </h1>
            <select onChange={(e) => setFilter(e.target.value)} defaultValue="All" className="select select-success text-2xl font-bold">
                <option>All</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video Call</option>
            </select>

            {data.map((item, index) => {

                if (filter !== "All" && item.action !== filter) {
                    return null;
                }
                return (
                    <div key={index} className="card bg-base-100 shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-5 flex-row gap-4 items-center">
                        <div className="text-3xl">
                            {item.icon}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">{item.friend.name}</h1>
                            <h1 className="text-xl">{item.action}</h1>
                        </div>
                    </div>)
            })}
        </div>
    );
};

export default Cont;