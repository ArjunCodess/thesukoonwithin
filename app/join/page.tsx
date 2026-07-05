import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { applicationForms, joinRoles } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Join",
  description:
    "Explore internship and contributor roles at The Sukoon Within. Application buttons are listed at the end of the page.",
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
              The Sukoon Within has two application paths: one for internship
              roles and one for contributors in research, on-site volunteering,
              event planning, social media management, and design. The
              application buttons are listed at the end of this page.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          {joinRoles.map((role, index) => (
            <Card
              key={role.title}
              className={cn(
                "rounded-4xl p-6",
                joinRoles.length % 2 === 1 && index === joinRoles.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-[calc((100%-1rem)/2)]"
                  : ""
              )}
            >
              <CardContent className="p-0">
                <Badge variant="secondary">{role.form}</Badge>
                <h2 className="mt-3 text-2xl font-semibold">{role.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {role.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.focus.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Applications</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold">
            Choose the form that matches your role.
          </h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Both forms open in Google Forms. Internship applicants should use
            the internship form; researchers, volunteers, event planners, social
            media managers, and designers should use the contributor form.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {applicationForms.map((form) => (
            <Card key={form.href} className="rounded-4xl p-6">
              <CardContent className="flex h-full flex-col gap-5 p-0">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{form.title}</h3>
                  <p className="leading-7 text-muted-foreground">{form.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {form.roles.map((role) => (
                      <Badge key={role} variant="secondary">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  className="mt-auto w-full sm:w-fit"
                  render={
                    <Link href={form.href} target="_blank" rel="noreferrer" />
                  }
                  nativeButton={false}
                >
                  {form.cta}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    data-icon="inline-end"
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
