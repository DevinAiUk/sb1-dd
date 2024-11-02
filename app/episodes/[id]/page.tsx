"use client"

import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { mockEpisodes } from "@/lib/mock-data"
import { VideoPlayer } from "@/components/video-player"
import { RelatedEpisodes } from "@/components/related-episodes"
import { EpisodeDetails } from "@/components/episode-details"
import { formatViews } from "@/lib/utils"

export default function EpisodePage() {
  const { id } = useParams()
  const episode = mockEpisodes.find((ep) => ep.id === Number(id))
  
  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Episode not found</h1>
          <Button asChild>
            <Link href="/episodes">Back to Episodes</Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedEpisodes = mockEpisodes
    .filter((ep) => ep.id !== episode.id && ep.category === episode.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          asChild
          className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/episodes" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Episodes
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <VideoPlayer
              thumbnail={episode.thumbnail}
              title={episode.title}
              duration={episode.duration}
            />
            
            <EpisodeDetails
              title={episode.title}
              description={episode.description}
              views={formatViews(episode.views)}
              date={episode.date}
              category={episode.category}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Related Episodes</h2>
            <RelatedEpisodes episodes={relatedEpisodes} />
          </div>
        </div>
      </div>
    </div>
  )
}