import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bars */}
            <div className="hidden md:flex gap-2 border- " >
                <Image src="/search.png" alt="" className="bg-transparent" width={20} height={16} />
                <input type="search" placeholder="Search......" />
            </div>

            {/* Icons and users */}
            <div className="flex items-center justify-center gap-4 ">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center" >
                    <Image src="/message.png" alt="" width={20} height={20} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center" >
                    <Image src="/announcement.png" alt="" width={20} height={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-md leading-3 font-medium">Haseeb Maqsood</span>
                    <span className="text-[13px] text-right text-gray-500">Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;