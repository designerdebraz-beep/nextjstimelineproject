"use client"
import { ImCancelCircle, ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import NavButton from "./NavButton";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import Link from "next/link";
import { CgCloseR } from "react-icons/cg";

const Navbar = () => {

    const navButtons = [
        {
            path: "/home",
            text: "Home",
            icon: <IoHomeOutline />
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <IoMdTime />
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <ImStatsDots />
        },
    ]
    const [menuBtn, setMenuBtn] = useState(false)

    return (

        <div className="sticky top-0 z-50 bg-base-100/10 backdrop-blur-md border-b border-base-300/10">
            <div className="navbar shadow-sm px-5 sm:px-20 sm:py-4 ">
                <div className="flex-1">
                    <Link href='/' className="text-xl md:text-2xl font-bold text-[#1D3C33] tracking-tight cursor-pointer"><span className="font-semibold text-[#1D3C33]/80">Keen</span>Keeper</Link>
                </div>
                <div className="flex-none">
                    <ul className="hidden menu menu-horizontal px-1 md:flex lg:flex sm:flex gap-4">
                        {
                            navButtons.map((item, index) =>
                                <NavButton key={index} href={item.path} text={item.text} icon={item.icon}></NavButton>
                            )
                        }
                    </ul>
                </div>
                <div className="sm:hidden">
                    <button className="btn" onClick={() => setMenuBtn(!menuBtn)}>
                        {
                            menuBtn ?<ImCancelCircle /> :   <TiThMenu />
                        }
                    </button>
                </div>
            </div>
            {
                menuBtn && <div className={`bg-base-100/80 sm:hidden flex justify-around p-4 absolute top-16 left-0 w-full shadow-md transition-all duration-300 ${menuBtn ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                    {
                        navButtons.map((item, index) => (
                            <div key={index}>
                                <NavButton href={item.path} text={item.text} icon={item.icon}></NavButton>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    );
};

export default Navbar;