import FormModal from "@/app/components/FormModal"
import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import TableSearch from "@/app/components/TableSearch"
import { role, teachersData } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

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

    const renderRow = (item: Teacher) => (
        <tr key={item.id} className="border-b border-gray-300 even:bg-slate-200 rounded-lg text-sm hover:bg-fuchsia-50 ">
            <td className="flex items-center gap-3 py-4 px-2">
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
            <td className="hidden md:table-cell">
                {item.teacherId}
            </td>
            <td className="hidden md:table-cell">
                {item.subjects.join(",")}
            </td>
            <td className="hidden md:table-cell">
                {item.classes.join(",")}
            </td>
            <td className="hidden md:table-cell">
                {item.phone}
            </td>
            <td className="hidden md:table-cell">
                {item.address}
            </td>
            <div className="flex items-center justify-evenly gap-3 ">
                <Link href={`/src/app/dashboard/list/teachers/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200" >
                        <Image src="/view.png" alt="" width={16} height={16} />
                    </button>
                </Link>
                {role === "admin" && (
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-200" >
                        <FormModal table="teacher" type="delete" />
                    </button>
                )}
            </div>
        </tr>
    )

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
                        {role === "admin" && (
                            <button className="flex items-center w-8 h-8 justify-center rounded-full bg-yellow-300">
                            </button>
                            <FormModal table="teacher" type="create"/>
                        )}

                    </div>
                </div>
            </div>

            {/* list */}
            <div>
                <Table columns={columns} renderRow={renderRow} data={teachersData} />
            </div>

            {/* pagination */}
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default TeacherListPage
