import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { HeroCarousel } from "@/components/hero-carousel"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  impactStats,
  missionCards,
  siteLinks,
  workHighlights,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div className="bg-background">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 text-center sm:px-6 md:py-18 lg:px-8">
        <div className="flex max-w-4xl flex-col items-center gap-7">
          <h1 className="max-w-3xl font-heading text-4xl leading-tight font-semibold tracking-normal sm:text-5xl md:text-6xl">
            A youth-led mental health movement for Gen Z.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            The Sukoon Within creates safe, non-judgemental spaces where young
            people can talk about what they feel, learn emotional language, and
            find community-led support.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/join" className={cn(buttonVariants({ size: "lg" }))}>
              Join the movement
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Link>
            <a
              href={siteLinks.googleForm}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Apply for internship
            </a>
          </div>
        </div>
        <HeroCarousel />
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {impactStats.map((stat) => (
            <Card
              key={stat.label}
              className="gap-2 rounded-3xl p-5"
            >
              <p className="font-mono text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm font-medium">{stat.label}</p>
              <p className="text-sm leading-6 text-muted-foreground">
                {stat.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-primary">Introduction</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold sm:text-4xl">
            Small efforts, real actions, safer conversations.
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-base leading-7 text-muted-foreground">
          <p>
            The Sukoon Within is building a youth-led mental health movement
            focused on Gen Z. The work responds to rising concerns around
            suicide, addiction, loneliness, and emotional silence with
            education, content, and chill, judgement-free sessions.
          </p>
          <p>
            Aligned with SDG 3, the organization collaborates with NGOs and
            community partners to make mental health awareness more accessible.
            It is not clinical care. It is a movement for language, listening,
            and change.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-primary">Mission preview</p>
            <h2 className="font-heading text-3xl leading-tight font-semibold sm:text-4xl">
              Built by young people, for communities that need the language.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end">
            The long-term goal is to bring mental health education into schools
            and build a youth network that can carry the work back into local
            communities.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          {missionCards.map((card, index) => (
            <Card
              key={card.title}
              className={cn(
                "rounded-4xl p-6",
                index === 2 ? "md:col-span-2" : ""
              )}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {card.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-primary">Work</p>
            <h2 className="font-heading text-3xl leading-tight font-semibold sm:text-4xl">
              Showing up where conversations were missing.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workHighlights.slice(0, 4).map((item) => (
              <Card
                key={item.title}
                className="rounded-4xl p-6"
              >
                <CardContent className="p-0">
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.meta}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link
            href="/work"
            className={cn(buttonVariants({ variant: "outline" }), "w-fit")}
          >
            See the work
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Join us now</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold sm:text-4xl text-balance">
            Help take mental health education to more young people.
          </h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Applications are open for Social Media and Outreach & Networking
            interns who want to build meaningful mental health awareness work.
          </p>
        </div>
        <Link href="/join" className={cn(buttonVariants({ size: "lg" }))}>
          Join us
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </Link>
      </section>
    </div>
  )
}
