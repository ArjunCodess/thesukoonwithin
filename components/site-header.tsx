import Link from "next/link"

import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/site-data"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <BrandMark />
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            render={<Link href="/join" />}
            nativeButton={false}
          >
            Join us
          </Button>
        </div>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-1 sm:gap-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-4xl px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
