import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bars */}
            <div className="hidden md:flex gap-2">
                <Image src="/search.png" alt="" width={16} height={14} />
                <input type="search" placeholder="Search......" />
            </div>

            {/* Icons and users */}
            <div className=""></div>
        </div>
    )
}

export default Navbar;