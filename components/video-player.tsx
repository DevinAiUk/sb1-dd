"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  thumbnail: string
  title: string
  duration: string
}

export function VideoPlayer({ thumbnail, title, duration }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // In a real app, this would trigger the video player
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
      {!isPlaying && (
        <>
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button
              size="lg"
              className="gap-2"
              onClick={handlePlay}
            >
              <Play className="h-6 w-6" />
              Play Video
            </Button>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
            {duration}
          </div>
        </>
      )}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <p className="text-white">Video player would be here</p>
        </div>
      )}
    </div>
  )
}