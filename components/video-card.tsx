import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Episode } from "@/lib/types"
import { formatViews } from "@/lib/utils"

interface VideoCardProps {
  episode: Episode
}

export function VideoCard({ episode }: VideoCardProps) {
  return (
    <Card className="group overflow-hidden">
      <Link href={`/episodes/${episode.id}`}>
        <div className="relative aspect-video">
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="h-12 w-12 text-white" />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
            {episode.duration}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {episode.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{formatViews(episode.views)} views</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(episode.date))} ago</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-primary">{episode.category}</span>
          </div>
        </div>
      </Link>
    </Card>
  )
}