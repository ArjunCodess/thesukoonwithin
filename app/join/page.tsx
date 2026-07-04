import type { Metadata } from "next"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { joinRoles, siteLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Join",
  description:
    "Apply to join The Sukoon Within as a Social Media Intern or Outreach & Networking Intern.",
}

export default function JoinPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-4xl flex-col gap-4">
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
              Join the team building safer mental health conversations.
            </h1>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              The Sukoon Within is looking for young people who can help carry
              the movement online, into communities, and toward more schools and
              partner spaces.
            </p>
          </div>
          <a
            href={siteLinks.googleForm}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "w-fit")}
          >
            Open application form
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </a>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          {joinRoles.map((role) => (
            <Card
              key={role.title}
              className="rounded-4xl p-6"
            >
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold">{role.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {role.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-4xl border bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Application</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold">
            Ready to apply?
          </h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            The form opens in Google Forms and covers the Social Media Intern
            and Outreach & Networking Intern applications.
          </p>
        </div>
        <a
          href={siteLinks.googleForm}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Send my application
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </a>
      </section>
    </div>
  )
}
