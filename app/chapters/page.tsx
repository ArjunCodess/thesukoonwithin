import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { chapterCities } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Meet the city chapters bringing youth-led mental health conversations closer to home.",
}

export default function ChaptersPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-end md:py-16 lg:px-8">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium text-primary">Chapter cities</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-normal text-balance sm:text-5xl">
            One movement, shaped by every city.
          </h1>
        </div>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg md:justify-self-end">
          From Kolkata to Abu Dhabi, each chapter brings mental health
          education closer to the children and communities who need it.
        </p>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          {chapterCities.map((chapter) => (
            <Card key={chapter.city} className="rounded-4xl p-6">
              <CardContent className="flex h-full flex-col gap-4 p-0">
                <div>
                  <p className="text-sm font-medium text-primary">
                    {chapter.country}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl leading-tight font-semibold text-balance">
                    {chapter.city}
                  </h2>
                </div>
                <p className="leading-7 text-muted-foreground">{chapter.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-primary">Your city can be next</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold text-balance">
            Want to build a chapter in your city?
          </h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Apply as a Mental Health Ambassador through the Join page. You’ll help
            organize local sessions, connect with schools and communities, and
            grow the chapter around your city’s needs.
          </p>
        </div>
        <Button
          size="lg"
          className="w-full sm:w-fit md:justify-self-end"
          render={<Link href="/join" />}
          nativeButton={false}
        >
          Apply as a Mental Health Ambassador
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </Button>
      </section>
    </div>
  )
}
