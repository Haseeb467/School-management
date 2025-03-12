
export default function DashboardLayout({

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="h-screen flex" >
                    {/* Left */}
                    <div className="l w-">l</div>
                    {/* Right */}
                    <div className="r">r</div>
                </div>
            </body>
        </html>
    );
}
