import Link from "next/link";

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
                icon: "parent.png",
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
                href: "/exam"
            },
            {
                icon: "/assignment.png",
                label: "Assignment",
                href: "/assignment"
            },
            {
                icon: "/attendence.png",
                label: "Attendence",
                href: "/attendence"
            },
            {
                icon: "/calender.png",
                label: "Events",
                href: "/calender"
            },
            {
                icon: "/message.png",
                label: "Message",
                href: "/message"
            },
            {
                icon: "/announcement",
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
                            <Image src={item.icon} alt="" width={20}  />
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu;