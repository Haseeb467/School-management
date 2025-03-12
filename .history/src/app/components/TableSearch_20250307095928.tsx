const TableSearch = () => {
  return (
      <div className="hidden md:flex gap-2 text-md rounded-full ring-[1.5px] ring-gray-300 p-2" >
                    <Image src="/search.png" alt="" width={18} height={14} />
                    <input type="search" placeholder="Search......" className="bg-transparent outline-none" />
                </div>
  )
}

export default TableSearch
