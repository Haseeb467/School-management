
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                from DashboardLayout{children}
            </body>
        </html>
    );
}
