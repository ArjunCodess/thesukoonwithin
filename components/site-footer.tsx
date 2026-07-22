import Link from "next/link"

import { BrandMark } from "@/components/brand-mark"
import { navItems, siteLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <BrandMark />
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            The Sukoon Within builds youth-led mental health education spaces
            for Gen Z, aligned with SDG 3 and rooted in community action.
          </p>
          <p className="text-sm font-medium">
            No peace is better than the peace within.
          </p>
          <p className="text-sm text-muted-foreground">
            Website built by{" "}
            <Link
              href="https://arjuncodess.is-a.dev/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Arjun Vijay Prakash
            </Link>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Pages</p>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Contact</p>
            <Link
              href={`mailto:${siteLinks.email}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {siteLinks.email}
            </Link>
            <Link
              href={siteLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href={siteLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
