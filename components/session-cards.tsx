"use client"

import Image from "next/image"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { sessionPosts } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SessionCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sessionPosts.map((post) => (
        <Dialog key={post.href}>
          <Card className="group flex min-h-full flex-col gap-0 overflow-hidden rounded-3xl p-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="relative aspect-[4/3] max-h-72 shrink-0 overflow-hidden bg-muted sm:aspect-video">
              <Image
                src={post.image}
                alt={`${post.title} photo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <CardContent className="flex min-h-0 flex-1 flex-col gap-5 p-5 sm:p-6">
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {post.location} - {post.date}
                </p>
                <h3 className="text-xl leading-tight font-semibold sm:text-2xl">
                  {post.title}
                </h3>
                <p className="max-h-28 overflow-y-auto pr-2 leading-7 text-muted-foreground sm:max-h-32">
                  {post.summary}
                </p>
              </div>
              <div className="mt-auto flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
                <DialogTrigger
                  render={
                    <Button className="w-full sm:w-fit" variant="outline" />
                  }
                >
                  Read more
                </DialogTrigger>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "w-fit px-0"
                  )}
                >
                  LinkedIn post
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    data-icon="inline-end"
                  />
                </a>
              </div>
            </CardContent>
          </Card>
          <DialogContent className="max-h-[min(760px,calc(100svh-2rem))] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="pr-10 text-2xl leading-tight">
                {post.title}
              </DialogTitle>
              <DialogDescription>
                {post.author} - {post.location} - {post.date}
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video max-h-[360px] overflow-hidden rounded-3xl bg-muted">
              <Image
                src={post.image}
                alt={`${post.title} photo`}
                fill
                sizes="(max-width: 750px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <DialogFooter>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Read on LinkedIn
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  data-icon="inline-end"
                />
              </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
