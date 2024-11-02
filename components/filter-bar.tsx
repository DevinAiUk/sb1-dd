"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterBarProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  sortBy: "latest" | "popular"
  onSortChange: (sort: "latest" | "popular") => void
}

export function FilterBar({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: FilterBarProps) {
  const categories = [
    "Tech Analysis",
    "Political Insights",
    "Cultural Trends",
    "Science Deep Dives",
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-muted/50 p-4 rounded-lg">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "secondary" : "ghost"}
          onClick={() => onCategoryChange(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "secondary" : "ghost"}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Select
        value={sortBy}
        onValueChange={(value) => onSortChange(value as "latest" | "popular")}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}