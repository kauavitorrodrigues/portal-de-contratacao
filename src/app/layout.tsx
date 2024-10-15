import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/site/layout/Header";
import Head from "next/head";

const fontSans = FontSans({
subsets: ["latin"],
variable: "--font-sans",
})

export const metadata: Metadata = {
title: "WorkNest"
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <html lang="pt-br" suppressHydrationWarning >

        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable )}>

            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <main className="min-h-screen w-full flex flex-col">
                
                    <Header/>
                    {children}
                
                </main>

                <Toaster/>

            </ThemeProvider>

        </body>

    </html>
);
}