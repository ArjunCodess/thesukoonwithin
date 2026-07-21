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
  const videoNode = React.useRef<HTMLVideoElement>(null)
  const progressNode = React.useRef<HTMLDivElement>(null)
  const animationName = React.useRef("autoplay-progress")
  const timeoutId = React.useRef(0)
  const rafId = React.useRef(0)
  const resumeTimeoutId = React.useRef(0)
  const isInteracting = React.useRef(false)
  const [api, setApi] = React.useState<CarouselApi>()
  const [showProgress, setShowProgress] = React.useState(true)
  const [isVideoSlide, setIsVideoSlide] = React.useState(true)
  const [videoProgress, setVideoProgress] = React.useState(0)
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
      isInteracting.current = true
      window.clearTimeout(resumeTimeoutId.current)
      setShowProgress(false)
      autoplayPlugin.stop()
      videoNode.current?.pause()
    }

    const handleInteractionEnd = () => {
      isInteracting.current = false
      window.clearTimeout(resumeTimeoutId.current)

      if (api.selectedScrollSnap() === 0) {
        setShowProgress(true)
        void videoNode.current?.play()
        return
      }

      resumeTimeoutId.current = window.setTimeout(() => {
        setShowProgress(true)
        autoplayPlugin.play()
      }, 1000)
    }

    const handleSelect = () => {
      const video = videoNode.current

      if (api.selectedScrollSnap() === 0) {
        setIsVideoSlide(true)
        setShowProgress(true)
        autoplayPlugin.stop()
        void video?.play()
        return
      }

      setIsVideoSlide(false)

      if (video) {
        video.pause()
        video.currentTime = 0
        setVideoProgress(0)
      }

      if (!isInteracting.current) {
        setShowProgress(true)
        autoplayPlugin.play()
      }
    }

    api
      .on("autoplay:timerset", handleTimerSet)
      .on("pointerDown", handleInteraction)
      .on("pointerUp", handleInteractionEnd)
      .on("select", handleSelect)

    handleSelect()

    if (api.selectedScrollSnap() !== 0 && showProgress) {
      startProgress(autoplayPlugin.timeUntilNext())
    }

    return () => {
      api
        .off("autoplay:timerset", handleTimerSet)
        .off("pointerDown", handleInteraction)
        .off("pointerUp", handleInteractionEnd)
        .off("select", handleSelect)
    }
  }, [api, isVideoSlide, showProgress, startProgress])

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
          <CarouselItem className="pl-3 md:pl-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border bg-muted shadow-sm sm:aspect-[16/8]">
              <video
                ref={videoNode}
                src="/hero.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                aria-label="The Sukoon Within community work"
                className="h-full w-full object-cover"
                onTimeUpdate={(event) => {
                  const video = event.currentTarget
                  setVideoProgress(
                    video.duration ? video.currentTime / video.duration : 0
                  )
                }}
                onEnded={() => {
                  setVideoProgress(1)
                  api?.scrollNext()
                }}
              />
            </div>
          </CarouselItem>

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
          className={
            isVideoSlide
              ? "h-full origin-left rounded-full bg-primary transition-transform duration-200 ease-linear"
              : "animate-autoplay-progress h-full origin-left rounded-full bg-primary"
          }
          style={
            isVideoSlide ? { transform: `scaleX(${videoProgress})` } : undefined
          }
        />
      </div>
    </div>
  )
}
