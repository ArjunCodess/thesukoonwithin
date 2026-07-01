"use client"

import Image from "next/image"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button, buttonVariants } from "@/components/ui/button"
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
    <div className="grid gap-4 md:grid-cols-2">
      {sessionPosts.map((post) => (
        <Dialog key={post.href}>
          <article className="flex min-h-full flex-col overflow-hidden rounded-4xl border bg-card shadow-sm">
            <div className="relative aspect-video bg-muted">
              <Image
                src={post.image}
                alt={`${post.title} photo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-5 p-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {post.location} · {post.date}
                </p>
                <h3 className="text-2xl font-semibold">{post.title}</h3>
                <p className="leading-7 text-muted-foreground">
                  {post.summary}
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
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
            </div>
          </article>
          <DialogContent className="max-h-[min(760px,calc(100svh-2rem))] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="pr-10 text-2xl leading-tight">
                {post.title}
              </DialogTitle>
              <DialogDescription>
                {post.author} · {post.location} · {post.date}
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-muted">
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
