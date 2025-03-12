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
            },
            {
                icon: "/teacher.png",
                label: "Teacher",
                href: "/teacher",
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/student"
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/parent"
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/classes"
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/Lessons"
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/exams"
            },
            {
                icon: "/assignment.png",
                label: "Assignment",
                href: "/assignment"
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/attendance"
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/calender"
            },
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
                <div className="" key={i.title} >
                    <span>{i.title}</span>
                    {i.items.map(item => (
                        <Link href={item.href} key={item.label}>
                            <Image src={item.icon} alt="" width={20} height={20} />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu;