"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { BlogPost } from "@/lib/types"
import { mockBlogPosts, mockPopularTags } from "@/lib/mock-data"
import { BlogCard } from "@/components/blog-card"
import { AboutSection } from "@/components/about-section"
import { PopularTags } from "@/components/popular-tags"
import NewsletterForm from "@/components/newsletter-form"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = mockBlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const featuredPost = mockBlogPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Post */}
            {featuredPost && !searchQuery && (
              <Card className="group overflow-hidden">
                <div className="aspect-[2/1] relative">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="mb-2">{featuredPost.category}</Badge>
                    <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
                    <p className="line-clamp-2 text-sm text-gray-200">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Regular Posts */}
            <div className="grid gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <AboutSection />
            <Separator />
            <PopularTags tags={mockPopularTags} />
            <Separator />
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}