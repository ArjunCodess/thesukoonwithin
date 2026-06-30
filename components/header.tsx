"use client"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { navItems } from "@/lib/site-data"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const scrolled = useScroll(10)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
            scrolled,
        }
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="flex min-w-0 items-center gap-3 rounded-md p-1.5"
          href="/"
        >
          <Image
            src="/logo.jpg"
            alt="The Sukoon Within logo"
            width={40}
            height={40}
            priority
            className="size-10 rounded-full object-cover ring-1 ring-border"
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-heading text-base leading-none font-semibold sm:text-lg">
              The Sukoon Within
            </span>
            <span className="truncate text-xs text-muted-foreground">
              Youth-led mental health movement
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((link) => (
            <Button
              key={link.label}
              size="sm"
              variant="ghost"
              render={<Link href={link.href} />}
              nativeButton={false}
            >
              {link.label}
            </Button>
          ))}
          <Button size="sm" render={<Link href="/join" />} nativeButton={false}>
            Join us
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  )
}
