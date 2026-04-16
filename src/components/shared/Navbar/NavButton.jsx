"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavButton = ({ href, text, icon }) => {
    const pathName = usePathname()
    return (
        <Link href={href} className={pathName == href ? "btn inline-flex items-center gap-2 bg-[#244D3F] hover:bg-[#1a3a2f] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95" : "btn"}>{icon} {text}</Link>
    );
};

export default NavButton;