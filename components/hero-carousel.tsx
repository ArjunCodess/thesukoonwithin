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
import { heroImages } from "@/lib/site-data"

export function HeroCarousel() {
  const progressNode = React.useRef<HTMLDivElement>(null)
  const animationName = React.useRef("")
  const timeoutId = React.useRef(0)
  const rafId = React.useRef(0)
  const resumeTimeoutId = React.useRef(0)
  const [api, setApi] = React.useState<CarouselApi>()
  const [showProgress, setShowProgress] = React.useState(true)
  const plugins = React.useMemo(
    () => [
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
      }),
    ],
    []
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
  }, [])

  React.useEffect(() => {
    const autoplayPlugin = api?.plugins()?.autoplay
    if (!api || !autoplayPlugin) return

    const handleTimerSet = () => {
      if (showProgress) {
        startProgress(autoplayPlugin.timeUntilNext())
      }
    }

    const handleInteraction = () => {
      window.clearTimeout(resumeTimeoutId.current)
      setShowProgress(false)
      autoplayPlugin.stop()
    }

    const handleInteractionEnd = () => {
      window.clearTimeout(resumeTimeoutId.current)
      resumeTimeoutId.current = window.setTimeout(() => {
        setShowProgress(true)
        autoplayPlugin.play()
      }, 1000)
    }

    api
      .on("autoplay:timerset", handleTimerSet)
      .on("pointerDown", handleInteraction)
      .on("pointerUp", handleInteractionEnd)

    if (showProgress) {
      startProgress(autoplayPlugin.timeUntilNext())
    }

    return () => {
      api
        .off("autoplay:timerset", handleTimerSet)
        .off("pointerDown", handleInteraction)
        .off("pointerUp", handleInteractionEnd)
    }
  }, [api, showProgress, startProgress])

  React.useEffect(() => {
    return () => {
      window.cancelAnimationFrame(rafId.current)
      window.clearTimeout(timeoutId.current)
      window.clearTimeout(resumeTimeoutId.current)
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
        plugins={plugins}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-5">
          {heroImages.map((image) => (
            <CarouselItem key={image.src} className="pl-3 md:pl-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border bg-muted shadow-sm sm:aspect-[16/8]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover"
                  priority={image.src === heroImages[0].src}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        className="mx-auto h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-muted transition-opacity duration-200 data-[hidden=true]:opacity-0"
        data-hidden={!showProgress}
      >
        <div
          ref={progressNode}
          className="animate-autoplay-progress h-full origin-left rounded-full bg-primary"
        />
      </div>
    </div>
  )
}
