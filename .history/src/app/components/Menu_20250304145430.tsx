import Link from "next/link";
import Image from "next/image";


const menuItems = [
    {
        title: "Menu",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/teacher.png",
                label: "Teacher",
                href: "/teacher",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/student",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/parent",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/classes",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/Lessons",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/exams",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/assignment.png",
                label: "Assignment",
                href: "/assignment",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/attendance",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/calender",

            },
                visible: ["admin", "teacher", "student", "parent"]
            {
                icon: "/message.png",
                label: "Message",
                href: "/message"
            },
            {
                icon: "/announcement.png",
                label: "Announcement",
                href: "/announcement"
            }
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile"
            },
            {
                icon: "/setting.png",
                label: "Setting",
                href: "/setting"
            },
            {
                icon: "/Logout.png",
                label: "Logout",
                href: "/logout"
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
                    {i.items.map(item => (
                        <Link href={item.href} key={item.label} className="
                        flex item-center justify-center lg:justify-start gap-3 my-1 text-gray-600
                        ">
                            <Image src={item.icon} alt="" width={25} height={18} />
                            <span className="hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu;