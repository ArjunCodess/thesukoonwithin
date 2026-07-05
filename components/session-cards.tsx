"use client"

import Image from "next/image"
import Link from "next/link"
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { sessionPosts } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SessionCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sessionPosts.map((post) => (
        <Dialog key={post.href}>
          <Card className="flex min-h-full flex-col gap-0 overflow-hidden rounded-3xl p-0">
            <div className="relative h-56 shrink-0 overflow-hidden bg-muted sm:h-64 md:h-72">
              <Image
                src={post.image}
                alt={`${post.title} photo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
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
                <Link
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
                </Link>
              </div>
            </CardContent>
          </Card>
          <DialogContent className="flex max-h-[calc(100svh-1rem)] flex-col gap-0 overflow-hidden p-0 sm:max-h-[min(760px,calc(100svh-2rem))] sm:max-w-2xl">
            <DialogHeader className="shrink-0 p-5 pb-4 sm:p-6 sm:pb-4">
              <DialogTitle className="pr-10 text-2xl leading-tight">
                {post.title}
              </DialogTitle>
              <DialogDescription>
                {post.author} - {post.location} - {post.date}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="flex-1 px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="relative h-52 w-full overflow-hidden rounded-3xl bg-muted sm:h-72">
                <Image
                  src={post.image}
                  alt={`${post.title} photo`}
                  fill
                  sizes="(max-width: 750px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-muted-foreground">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter className="shrink-0 border-t px-5 py-4 sm:px-6">
              <Link
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit"
                )}
              >
                Read on LinkedIn
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
