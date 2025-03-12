import Image from "next/image"

const TableSearch = () => {
    return (
        <div className="w-full flex md:w-auto gap-2 text-md rounded-full ring-[1.5px] ring-gray-300 p-2" >
            <Image src="/search.png" alt="" width={1} height={14} />
            <input type="search" placeholder="Search......" className="w-[200px] p-2 bg-transparent outline-none" />
        </div>
    )
}

export default TableSearch
