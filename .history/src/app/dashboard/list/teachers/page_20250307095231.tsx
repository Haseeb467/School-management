import TableSearch from "@/app/components/TableSearch"


const TeacherListPage = () => {
    return (
        <div className="bg-white rounded-md m-4 h-full mt-0 p-4 flex-1">

            {/* top */}
            <div className="">
                <h1 className="font-semibold text-lg">
                    All Teachers
                </h1>

                <div className="">
                    <TableSearch />
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
