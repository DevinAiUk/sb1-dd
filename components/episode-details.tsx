import { formatDistanceToNow, parseISO } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface EpisodeDetailsProps {
  title: string
  description: string
  views: string
  date: string
  category: string
}

export function EpisodeDetails({
  title,
  description,
  views,
  date,
  category,
}: EpisodeDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{views} views</span>
          <span>•</span>
          <span>{formatDistanceToNow(parseISO(date))} ago</span>
          <span>•</span>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </div>

      <Separator />

      <div className="prose dark:prose-invert max-w-none">
        <p>{description}</p>
      </div>
    </div>
  )
}