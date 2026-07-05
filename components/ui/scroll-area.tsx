"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function ScrollArea({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="scroll-area"
      className={cn("min-h-0 overflow-y-auto overscroll-contain", className)}
      {...props}
    />
  )
}

export { ScrollArea }
