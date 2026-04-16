import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { RiSignalWifiErrorLine } from "react-icons/ri";

const NotFound = () => {
    return (
     <div className="min-h-[80vh] flex items-center justify-center bg-white px-6 font-sans">
      <div className="max-w-xl w-full text-center">
        {/* Large Brand Styling for the 404 */}
        <h1 className="text-9xl font-bold text-[#1D3C33]/10 relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl text-[#1D3C33] tracking-tighter">
            Oops!
          </span>
        </h1>

        <div className="mt-8 space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">
            Page Not Found
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
            The connection you're looking for seems to have moved or doesn't exist. Let's get you back to your shelf.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
      
          
          <Link 
            href={'./'}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#1D3C33] text-white rounded-xl font-semibold hover:bg-[#162e27] transition-all shadow-lg shadow-green-900/10 active:scale-95"
          >
            <HiOutlineHome />
            Back to Home
          </Link>
        </div>

        {/* Brand Decoration */}
        <div className="mt-20 opacity-20">
          <p className="text-sm font-bold tracking-widest uppercase text-[#1D3C33]">
            KeenKeeper
          </p>
        </div>
      </div>
    </div>
    );
};

export default NotFound;