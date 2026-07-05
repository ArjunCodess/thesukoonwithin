import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import { Portal, PortalBackdrop } from "@/components/portal"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { navItems } from "@/lib/site-data"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        {open ? (
          <HugeiconsIcon
            icon={Cancel01Icon}
            strokeWidth={2}
            className="size-4.5"
          />
        ) : (
          <HugeiconsIcon
            icon={Menu01Icon}
            strokeWidth={2}
            className="size-4.5"
          />
        )}
      </Button>
      {open && (
        <Portal className="top-16" id="mobile-menu">
          <PortalBackdrop />
          <div
            className={cn(
              "ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97",
              "size-full p-4"
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="grid gap-y-2">
              {navItems.map((link) => (
                <Button
                  className="justify-start"
                  key={link.label}
                  onClick={() => setOpen(false)}
                  variant="ghost"
                  render={<Link href={link.href} />}
                  nativeButton={false}
                >
                  {link.label}
                </Button>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-2">
              <Button
                className="w-full"
                onClick={() => setOpen(false)}
                render={<Link href="/join" />}
                nativeButton={false}
              >
                Join us
              </Button>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => setOpen(false)}
                render={<Link href="/work" />}
                nativeButton={false}
              >
                See our work
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  )
}
