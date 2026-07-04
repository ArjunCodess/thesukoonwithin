"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { sessionPosts } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function HeroCarousel() {
  const progressNode = React.useRef<HTMLDivElement>(null)
  const animationName = React.useRef("")
  const timeoutId = React.useRef(0)
  const rafId = React.useRef(0)
  const [api, setApi] = React.useState<CarouselApi>()
  const [showAutoplayProgress, setShowAutoplayProgress] =
    React.useState(false)
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: true,
    })
  )

  const startProgress = React.useCallback((timeUntilNext: number | null) => {
    const node = progressNode.current

    if (!node || timeUntilNext === null) return

    if (!animationName.current) {
      animationName.current = window.getComputedStyle(node).animationName
    }

    node.style.animationName = "none"
    node.style.transform = "translate3d(0,0,0)"

    rafId.current = window.requestAnimationFrame(() => {
      timeoutId.current = window.setTimeout(() => {
        node.style.animationName = animationName.current
        node.style.animationDuration = `${timeUntilNext}ms`
      }, 0)
    })

    setShowAutoplayProgress(true)
  }, [])

  React.useEffect(() => {
    const autoplayPlugin = api?.plugins()?.autoplay
    if (!api || !autoplayPlugin) return

    api
      .on("autoplay:timerset", () =>
        startProgress(autoplayPlugin.timeUntilNext())
      )
      .on("autoplay:timerstopped", () => setShowAutoplayProgress(false))

    startProgress(autoplayPlugin.timeUntilNext())
  }, [api, startProgress])

  React.useEffect(() => {
    return () => {
      window.cancelAnimationFrame(rafId.current)
      window.clearTimeout(timeoutId.current)
    }
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-5">
          {sessionPosts.map((post) => (
            <CarouselItem key={post.image} className="pl-3 md:pl-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border bg-muted shadow-sm sm:aspect-[16/8]">
                <Image
                  src={post.image}
                  alt={`${post.title} session photo`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover"
                  priority={post.image === sessionPosts[0].image}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-5 text-left text-primary-foreground sm:p-6">
                  <p className="text-sm font-medium opacity-90">
                    {post.location} - {post.date}
                  </p>
                  <h2 className="mt-1 max-w-2xl text-xl leading-tight font-semibold sm:text-2xl">
                    {post.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        className={cn(
          "mx-auto h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-muted transition-opacity",
          showAutoplayProgress ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          ref={progressNode}
          className="h-full origin-left animate-autoplay-progress rounded-full bg-primary"
        />
      </div>
    </div>
  )
}
