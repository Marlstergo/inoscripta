"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Home
      </Link>
      <Link
        href="/popular"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/popular" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Popular
      </Link>
      <Link
        href="/business"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/business" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Business
      </Link>
      <Link
        href="/technology"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/technology" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Technology
      </Link>
      <Link
        href="/science"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/science" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Science
      </Link>
    </nav>
  )
}
