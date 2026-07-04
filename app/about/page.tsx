import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { founder, missionCards } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Sukoon Within, its founder, mission, vision, and youth-led mental health education work.",
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-16 lg:px-8">
        <Card className="overflow-hidden rounded-4xl p-3">
          <Image
            src={founder.image}
            alt="Soumili Das, founder of The Sukoon Within"
            width={800}
            height={800}
            priority
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
        </Card>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-primary">About us</p>
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
              Mental health education belongs to every child.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              The Sukoon Within is a youth-led mental health organization built
              for Gen Z. It creates real actions, meaningful content, and calm,
              non-judgemental sessions where young people can feel heard.
            </p>
          </div>
          <Card className="rounded-4xl bg-muted/40 p-6">
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground">Founder</p>
              <h2 className="mt-2 text-2xl font-semibold">{founder.name}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Soumili started The Sukoon Within in August 2025 with a clear
                belief: small, serious efforts can reduce stigma and make mental
                health conversations easier to begin.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          <Card className="rounded-4xl bg-background p-6">
            <CardContent className="p-0">
              <p className="text-sm font-medium text-primary">Our vision</p>
              <h2 className="mt-3 font-heading text-3xl leading-tight font-semibold">
                Mental health as a school subject.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                The vision is for mental health to become an important subject
                in every school in India, local and private alike. Children
                spend so much of their lives in school, and emotional education
                should meet them there.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-4xl bg-background p-6">
            <CardContent className="p-0">
              <p className="text-sm font-medium text-primary">Our mission</p>
              <h2 className="mt-3 font-heading text-3xl leading-tight font-semibold">
                Build a network that teaches forward.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                The mission is to connect young people around the world who are
                serious about mental health, equip them with tools and
                frameworks, and help them bring mental health education back to
                their own communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[0.85fr_1fr]">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-primary">How we work</p>
            <h2 className="font-heading text-3xl leading-tight font-semibold sm:text-4xl">
              Awareness without pretending to be clinical care.
            </h2>
          </div>
          <p className="text-base leading-7 text-muted-foreground">
            Aligned with SDG 3, the organization collaborates with NGOs,
            corporates, and communities to make mental health awareness more
            accessible. The work is educational and community-led, designed to
            create language, listening, and safer spaces.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {missionCards.map((card) => (
            <Card
              key={card.title}
              className="rounded-4xl p-6"
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

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Thank you</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold">
            No peace is better than the peace within.
          </h2>
        </div>
        <Link href="/join" className={cn(buttonVariants({ size: "lg" }))}>
          Join us now
        </Link>
      </section>
    </div>
  )
}
