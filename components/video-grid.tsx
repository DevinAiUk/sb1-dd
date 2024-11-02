import { VideoCard } from "@/components/video-card"
import { Episode } from "@/lib/types"

interface VideoGridProps {
  episodes: Episode[]
}

export function VideoGrid({ episodes }: VideoGridProps) {
  if (episodes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No episodes found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {episodes.map((episode) => (
        <VideoCard key={episode.id} episode={episode} />
      ))}
    </div>
  )
}