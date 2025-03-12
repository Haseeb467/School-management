
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* Left */}
                <div className="l">l</div>
                {/* Right */}
                <div className="r">r</div>
            </body>
        </html>
    );
}
