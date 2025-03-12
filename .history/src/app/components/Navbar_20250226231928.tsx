import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bars */}
            <div className="hidden md:flex gap-2">
                <Image src="/search.png" alt="" className="bg-transparent" width={20 } height={14} />
                <input type="search" placeholder="Search......" />
            </div>

            {/* Icons and users */}
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center" >
                <Image src="/message.png" alt="" width={20} height={20} />
            </div>
        </div>
    )
}

export default Navbar;