import Link from "next/link";

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
                            <Image src="    ">
                            </Image>
                        </Link>
                    </div>
                    {/* Right */}
                    <div className="r w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>
                </div>
            </body>
        </html>
    );
}
