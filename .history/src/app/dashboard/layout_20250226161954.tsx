import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"

export default function DashboardLayout({

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="h-screen flex" >
                    {/* Left */}
                    <div className="l w-[40%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
                        <Link href="/">
                            <div>
                                <Image src="../../../public/logo.png" alt="logo" width={32} height={32} />
                                <span>School Management</span>
                            </Image>
                    </div>
                </Link>
                 
            {/* Right */}
            <div className="r w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>
        </div>
        </body >
        </html >
    );
}
