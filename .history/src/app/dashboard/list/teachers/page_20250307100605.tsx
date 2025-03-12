import TableSearch from "@/app/components/TableSearch"
import Image from "next/image"


const TeacherListPage = () => {
    return (
        <div className="bg-white rounded-md m-4 h-full mt-0 p-4 flex-1">

            {/* top */}
            <div className="flex justify-between items-center">
                <h1 className="hidden md:block font-semibold text-lg">
                    All Teachers
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto  ">
                    <TableSearch />
                    <div className="flex justify-between items-center gap-4">
                        <button>
                            <Image src="/filter.png" alt="" width={15} height={15} />
                        </button>
                        <button>
                            <Image src="/filter.png" alt="" width={15} height={15} />
                        </button>
                    </div>
                </div>
            </div>

            {/* list */}
            <div></div>

            {/* pagination */}
            <div></div>
        </div>
    )
}

export default TeacherListPage
