import Image from "next/image"
import Link from "next/link"

export function BrandMark() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <Image
        src="/logo.jpg"
        alt="The Sukoon Within logo"
        width={44}
        height={44}
        priority
        className="size-11 rounded-full object-cover ring-1 ring-border"
      />
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-heading text-lg leading-none font-semibold">
          The Sukoon Within
        </span>
        <span className="truncate text-xs text-muted-foreground">
          Youth-led mental health movement
        </span>
      </span>
    </Link>
  )
}
