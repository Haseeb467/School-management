import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bars */}
            <div className="hidden md:flex gap-2 text-md rounded-full ring-[1.5px] ring-gray-300 p-2" >
                <Image src="/search.png" alt="" width={18} height={14} />
                <input type="search" placeholder="Search......" className="bg-transparent outline-none" />
            </div>

            {/* Icons and users */}
            <div className="flex items-center justify-end gap-6 w-full">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center" >
                    <Image src="/message.png" alt="" width={20} height={20} />
                </div>
                <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center" >
                    <Image src="/announcement.png" alt="" width={20} height={20} />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white text-xs rounded-full ">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-md leading-3 text-right linespsa font-medium">Haseeb Maqsood</span>
                    <span className="text-[14px] text-right text-gray-500">Admin</span>
                </div>
                <div className="bg-white rounded-full">
                    <Image src="/avatar.png" alt="" width={35} height={38} className="rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;