import TableSearch from "@/app/components/TableSearch"
import Image from "next/image"


const TeacherListPage = () => {
    return (
        <div className="bg-white rounded-md m-4 h-full mt-0 p-4 flex-1">

            {/* top */}
            <div className="flex justify-between">
                <h1 className="font-semibold text-lg">
                    All Teachers
                </h1>

                <div className="">
                    <TableSearch />
                    <div>
                        <button>
                            <Image src="/filter.png" alt="" width={21} height={15} />
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
