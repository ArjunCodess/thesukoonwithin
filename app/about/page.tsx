import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Linkedin01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { teamMembers } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Sukoon Within, its founder, mission, vision, and youth-led mental health education work.",
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-14 sm:px-6 md:py-18 lg:px-8">
        <div className="flex max-w-4xl flex-col gap-5">
          <p className="text-sm font-medium text-primary">About us</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
            Mental health education belongs to every child.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            The Sukoon Within is a youth-led mental health organization built
            for Gen Z. It creates real actions, meaningful content, and calm,
            non-judgemental sessions where young people can feel heard.
          </p>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          <Card className="rounded-4xl p-6">
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
          <Card className="rounded-4xl p-6">
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

      <section className="border-y bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="text-sm font-medium tracking-[0.28em] text-primary uppercase">
              Our team
            </p>
            <h2 className="font-heading text-4xl leading-tight font-semibold sm:text-5xl">
              Meet the team behind the movement.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              A youth-led circle of ambassadors, students, and organizers
              helping mental health education reach more communities.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.href}
                className="h-full gap-0 overflow-hidden rounded-4xl p-0"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Badge className="absolute top-4 left-4 z-10 tracking-[0.16em] uppercase">
                    {member.role}
                  </Badge>
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-2xl leading-tight">
                      {member.name}
                    </CardTitle>
                    <Link
                      href={member.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="mt-1 shrink-0 text-primary"
                    >
                      <HugeiconsIcon icon={Linkedin01Icon} />
                    </Link>
                  </div>
                  <CardDescription className="text-sm leading-6">
                    {member.headline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto px-6 pt-0 pb-6">
                  <p className="text-sm font-medium text-muted-foreground">
                    {member.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
        <blockquote className="border-y border-primary/30 py-10 text-center sm:py-12">
          <p className="text-sm font-medium text-primary">A thought we carry</p>
          <p className="mx-auto mt-4 max-w-3xl font-heading text-3xl leading-tight font-semibold text-balance sm:text-4xl">
            “No peace is better than the peace within.”
          </p>
        </blockquote>
      </section>
    </div>
  )
}
