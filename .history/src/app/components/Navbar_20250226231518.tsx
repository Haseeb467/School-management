import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bars */}
            <div className="hidden md:flex">
                <Image src="/search.png" alt="" width={14} height={14} />
                <input type= />
            </div> 

            {/* Icons and users */}
            <div className=""></div>
        </div>
    )
}

export default Navbar;