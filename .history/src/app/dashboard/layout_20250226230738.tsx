import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
// import logo from "../../../public/logo.png"

export default function DashboardLayout({

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="h-screen flex" >
                    {/* Left */}
                    <div className="l w-[40%] md:w-[8%] lg:w-[16%] xl:w-[15%] p-4">
                        <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
                            {/* <div className="flex items-center space-x-2"> */}
                            {/* Corrected Image path and closed Image component properly */}
                            <Image src="/logo.png" alt="logo" width={32} height={32} />
                            <span className="hidden lg:block">School Management</span>
                            {/* </div> */}
                        </Link>
                        <Menu />
                    </div>


                    {/* Right */}
                    <div className="r w-[80%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                        <Navbar />
                    </div>
                </div>
            </body >
        </html >
    );
}
