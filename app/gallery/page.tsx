import type { Metadata } from "next"
import Image from "next/image"

import { galleryImages } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See photographs from The Sukoon Within sessions, community activities, and youth-led mental health education work.",
}

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_0.55fr] md:items-end md:py-16 lg:px-8">
        <div className="flex max-w-4xl flex-col gap-5">
          <p className="text-sm font-medium text-primary">Gallery</p>
          <h1 className="font-heading text-4xl leading-tight font-semibold tracking-normal text-balance sm:text-5xl">
            The people and moments behind the movement.
          </h1>
        </div>
        <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg md:justify-self-end">
          A growing collection of sessions, activities, and honest conversations
          shared across our communities.
        </p>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={index === 0}
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
