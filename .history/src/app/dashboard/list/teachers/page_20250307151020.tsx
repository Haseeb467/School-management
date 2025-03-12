import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import TableSearch from "@/app/components/TableSearch"
import Image from "next/image"

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
};

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Teacher ID",
        accessor: "teacherID",
        className: "hidden md:table-cell"
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell"
    },
    {
        header: "Classes",
        accessor: "classes",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell"
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

const TeacherListPage = () => {

    const renderRow = (item = Teacher) => {
        <tr>
            <td>
                <Image src={item.photo} alt={item.name} width={40} height={40}
                    className="md:hidden xl:block w-10 h-10 rounded-full object-cover " />
                <div className="flex flex-col">
                    <h3 className="font-semibold">
                        {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                        {item?.email}
                    </p>
                </div>
            </td>
            <td>
                {item.teacherId}
            </td>
            <td>
                {item.teacherId}
            </td>
            <td>
                {item.teacherId}
            </td>
            <td>
                {item.phone}
            </td>
            <td>
                {item.address}
            </td>
        </tr>
    }

    return (
        <div className="bg-white rounded-md m-4 h-full mt-0 p-4 flex-1">

            {/* top */}
            <div className="flex justify-between items-center">
                <h1 className="hidden md:block font-semibold text-lg">
                    All Teachers
                </h1>

                <div className="dhd flex flex-col md:flex-row  gap-4  w-full md:w-auto  ">
                    <div>
                        <TableSearch />
                    </div>
                    <div className="flex justify-between items-center gap-4 self-end">
                        <button className="flex items-center w-8 h-8 justify-center rounded-full bg-yellow-300">
                            <Image src="/filter.png" alt="" width={15} height={15} />
                        </button>
                        <button className="flex items-center w-8 h-8 justify-center rounded-full bg-yellow-300">
                            <Image src="/sort.png" alt="" width={15} height={15} />
                        </button>
                        {/* <button className="flex items-center w-8 h-8 justify-center rounded-full bg-yellow-300">
                            <Image src="" alt="" width={15} height={15} />
                        </button> */}
                    </div>
                </div>
            </div>

            {/* list */}
            <div>
                <Table columns={columns} />
            </div>

            {/* pagination */}
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default TeacherListPage
