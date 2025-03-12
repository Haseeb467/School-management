import Link from "next/link";
import Image from "next/image";
import { role } from "@/app/lib/data"


const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/dashboard/admin",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/dashboard/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/dashboard/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/dashboard/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/subject.png",
                label: "Subjects",
                href: "/dashboard/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/dashboard/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/dashboard/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/dashboard/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/dashboard/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/dashboard/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/dashboard/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/dashboard/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/dashboard/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/dashboard/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];


const Menu = () => {
    return (
        <div>
            {menuItems.map(i => (
                <div className=" mt-4 flex flex-col gap-2" key={i.title} >
                    <span className="hidden lg:block text-gray-400font font-light my-4">{i.title}</span>
                    {i.items.map(item => {
                        if (item.visible.includes(role)) {

                            return (

                                <Link href={item.href} key={item.label} className="
                                flex item-center justify-center lg:justify-start gap-3 my-1 text-gray-600
                                ">
                                    <Image src={item.icon} alt="" width={25} height={18} />
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

export default Menu;