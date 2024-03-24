import type {Metadata} from "next";
import {Exo_2} from "next/font/google";
import "./globals.css";

const mainFont = Exo_2({
    weight: "400",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "mys1erious",
    description: "mys1erious' portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={mainFont.className}>{children}</body>
        </html>
    );
}
