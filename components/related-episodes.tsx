import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { formatDistanceToNow, parseISO } from "date-fns"
import { Episode } from "@/lib/types"
import { formatViews } from "@/lib/utils"

interface RelatedEpisodesProps {
  episodes: Episode[]
}

export function RelatedEpisodes({ episodes }: RelatedEpisodesProps) {
  if (episodes.length === 0) {
    return (
      <p className="text-muted-foreground">No related episodes found.</p>
    )
  }

  return (
    <div className="space-y-4">
      {episodes.map((episode) => (
        <Card key={episode.id} className="group overflow-hidden">
          <Link href={`/episodes/${episode.id}`}>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="relative aspect-video rounded overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                  {episode.duration}
                </div>
              </div>
              <div>
                <h3 className="font-medium line-clamp-2 text-sm group-hover:text-primary transition-colors">
                  {episode.title}
                </h3>
                <div className="mt-1 flex flex-col gap-1 text-xs text-muted-foreground">
                  <span>{formatViews(episode.views)} views</span>
                  <span>{formatDistanceToNow(parseISO(episode.date))} ago</span>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  )
}