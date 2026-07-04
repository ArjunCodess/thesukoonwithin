import type { Metadata } from "next"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteLinks, socialLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with The Sukoon Within on Instagram, LinkedIn, or by email.",
}

export default function ConnectPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_0.5fr] md:items-end md:py-16 lg:px-8">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium text-primary">Connect</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
            Bring a session, partnership, or collaboration to the table.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Reach out for school sessions, NGO collaborations, corporate
            community work, media queries, or youth volunteer conversations.
          </p>
        </div>
        <a
          href={`mailto:${siteLinks.email}`}
          className={cn(buttonVariants({ size: "lg" }), "w-fit md:justify-self-end")}
        >
          Email the team
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </a>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group"
            >
              <Card className="h-full rounded-4xl p-6 transition-colors group-hover:bg-muted/40">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-full border bg-muted">
                      <HugeiconsIcon icon={item.icon} />
                    </div>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="text-muted-foreground transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold">{item.label}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">For partners</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold">
            What to include in your message.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Your school, NGO, company, or community name",
            "The age group or audience you want to support",
            "Whether you need an online or offline session",
            "Your preferred city, date range, and contact person",
          ].map((item) => (
            <Card key={item} className="rounded-3xl p-5">
              <CardContent className="p-0">
                <p className="text-pretty leading-7 text-muted-foreground">
                  {item}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
