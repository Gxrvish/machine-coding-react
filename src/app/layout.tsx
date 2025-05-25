import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "React Machine Coding",
    description: "Small Projects to learn and grow",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en" foxified="">
            <body>
                {children}
            </body>
        </html>
    );
}
