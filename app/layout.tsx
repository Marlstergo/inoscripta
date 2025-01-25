import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { headers } from "next/headers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const headersList = headers()
    const pathname = headersList.get("x-pathname") || ""
    const isAuthPage = pathname === "/login" || pathname === "/register"
    
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        {!isAuthPage && (
                            <header className="sticky top-0 z-50 border-b bg-background">
                                <div className="container flex h-16 items-center px-4 mx-auto">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-bold mr-4">
                                            AGGREGATOR
                                        </span>
                                        <MainNav />
                                    </div>
                                    <div className="ml-auto flex items-center space-x-4">
                                        <ModeToggle />
                                        <UserNav />
                                    </div>
                                </div>
                            </header>
                        )}
                        <main
                            className={cn("flex-1", {
                                "container mx-auto": !isAuthPage,
                            })}
                        >
                            {children}
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
