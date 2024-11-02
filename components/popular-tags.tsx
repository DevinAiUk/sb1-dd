import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PopularTagsProps {
  tags: Array<{
    name: string
    count: number
  }>
}

export function PopularTags({ tags }: PopularTagsProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link key={tag.name} href={`/blog/tag/${tag.name.toLowerCase()}`}>
            <Badge variant="secondary" className="hover:bg-secondary/80">
              {tag.name} ({tag.count})
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
}