import Image from "next/image";
import { IoMdAdd } from "react-icons/io";;
import Link from "next/link";
import fdData from "../../../public/fd.json";
import { FaPlus } from "react-icons/fa";


const page = () => {

    const statusColor = {
        Overdue: "bg-red-300 rounded-2xl py-1 text-[15px] font-bold",
        "On-Track": "bg-green-300 rounded-2xl py-1 text-[15px] font-bold",
        "Almost Due": "bg-amber-300 rounded-2xl py-1 text-[15px] font-bold",
    }
    return (
        <div className="max-w-11/12 sm:max-w-10/12 mx-auto mt-20 mb-20">

            {/* Add friends section */}
            {/* <div className="text-center space-y-5 sm:space-y-10">
                <h1 className="text-4xl sm:text-8xl font-bold">Friends to keep close in your life</h1>
                <p claszsName="text-xl sm:text-3xl">Your personal shelf of meaningful connections. Browse, tend, and nurture the <span className="hidden sm:block"><br /></span>  relationships that matter most.</p>
                <button className="btn btn-info text-2xl py-4 sm:text-3xl sm:py-8 sm:px-7 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"><span className="flex"><IoMdAdd />Add a Friend</span></button>
            </div> */}
              <div className='max-w-[1100px] w-full mx-auto bg-white px-6 py-10 md:py-16 text-center space-y-6 md:space-y-8'>
            
            {/* - text-3xl for mobile, text-4xl/5xl for desktop 
               - leading-tight for better readability on small screens
            */}
            <h2 className='font-bold text-3xl md:text-5xl text-[#1D3C33] leading-tight'>
                Friends to keep close in your life
            </h2>
            
            {/* - Removed <br /> so text wraps naturally on mobile
               - Added max-w-2xl to keep text from getting too wide on desktop
            */}
            <p className='text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            {/* - Added hover effects and transition
               - Used flex items-center for better icon alignment
            */}
            <button className='inline-flex items-center gap-2 bg-[#244D3F] hover:bg-[#1a3a2f] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95'> 
                <FaPlus />
                Add Friend
            </button>
        </div>

            {/* 4 cards section */}
            <div className="grid grid-cols-2 gap-7 md:grid-cols-2 pt-20 sm:gap-20 lg:grid-cols-4">
                <div className="card bg-base-100 shadow-md py-5 flex items-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">{fdData.length}</h2>
                        <p className="text-xl font-semibold">Total Friends</p><br />
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm py-5 flex items-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">3</h2>
                        <p className="text-xl font-semibold">On Track</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm py-5 flex items-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">6</h2>
                        <p className="text-xl font-semibold">Need Attention</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm py-5 flex items-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-5xl font-bold">12</h2>
                        <p className="text-xl font-semibold">Interactions This Month</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <hr className="text-gray-300 border" />
            {/* Fds section */}
            <div className="mt-10">
                <div>
                    <h1 className="text-4xl font-bold pb-4">Your Friends :</h1>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-20 sm:gap-5 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">

                    {
                        fdData.map((fd) => (
                            <Link key={fd.id} href={`/home/${fd.id}`}>
                                <div className="h-full card bg-base-100 shadow-md py-5 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                                    <div className="card-body text-center space-y-1">
                                        <Image src={fd.picture} width={80} height={80} className="rounded-full object-cover w-30 h-30 mx-auto" alt="My friends Photos"></Image>
                                        <p className="text-2xl font-semibold">{fd.name}</p>
                                        <p className="text-xl">{fd.days_since_contact}d ago</p>
                                        <p className="text-xs sm:text-xl py-1.25 bg-green-700 text-white rounded-full">{fd.tags}</p>
                                        <p className={`${statusColor[fd.status]}`}>{fd.status}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default page;