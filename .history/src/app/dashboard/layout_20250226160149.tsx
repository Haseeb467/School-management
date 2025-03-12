
export default function DashboardLayout({

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="h-screen flex" >
                    {/* Left */}
                    <div className="l w-1/6 bg-re">l</div>
                    {/* Right */}
                    <div className="r w-5/6 bg-blue-200">r</div>
                </div>
            </body>
        </html>
    );
}
