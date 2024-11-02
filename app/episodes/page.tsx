"use client"

import { useState } from "react"
import { SearchBar } from "@/components/search-bar"
import { FilterBar } from "@/components/filter-bar"
import { VideoGrid } from "@/components/video-grid"
import { mockEpisodes } from "@/lib/mock-data"

export default function EpisodesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest")

  const filteredEpisodes = mockEpisodes
    .filter((episode) => {
      const matchesSearch = episode.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || episode.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return b.views - a.views
    })

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Episodes</h1>
        
        <div className="space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          
          <VideoGrid episodes={filteredEpisodes} />
        </div>
      </div>
    </div>
  )
}