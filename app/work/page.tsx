import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { SessionCards } from "@/components/session-cards"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { impactStats, siteLinks } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Work",
  description:
    "See the sessions, reach, and community mental health education work of The Sukoon Within.",
}

export default function WorkPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-14 sm:px-6 md:py-18 lg:px-8">
        <div className="flex max-w-4xl flex-col gap-5">
          <p className="text-sm font-medium text-primary">Our work</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
            Sessions that help young people name what they feel.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            The Sukoon Within has conducted 16+ sessions across online and
            offline formats, reaching more than 1,000 young minds through mental
            health education and community-led awareness.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="w-fit"
            render={
              <Link
                href={siteLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            View public updates
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {impactStats.map((stat) => (
            <Card key={stat.label} className="gap-2 rounded-3xl p-5">
              <p className="font-mono text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm font-medium">{stat.label}</p>
              <p className="text-sm leading-6 text-muted-foreground">
                {stat.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-primary">Sessions</p>
            <h2 className="font-heading text-3xl leading-tight font-semibold text-pretty sm:text-4xl">
              A few sessions from the ground.
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-base leading-7 text-muted-foreground">
            <p>
              The work began with one belief: mental health education belongs to
              every child, not only the privileged few. The team has shown up in
              community spaces, on screens, and in rooms where these
              conversations are often missing.
            </p>
            <p>
              Online and offline sessions give young people language for their
              feelings and a safer starting point for mental health
              conversations. This is education and awareness, not clinical care.
            </p>
          </div>
        </div>

        <SessionCards />
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-primary">Chapters</p>
            <h2 className="font-heading text-3xl leading-tight font-semibold">
              Chapters and international work are coming later.
            </h2>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              The first version of this website does not list international
              chapters. Future chapter pages can be added once the official
              locations, teams, and session records are ready.
            </p>
          </div>
          <Button
            size="lg"
            render={<Link href="/connect" />}
            nativeButton={false}
          >
            Connect with us
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </Button>
        </div>
      </section>
    </div>
  )
}
