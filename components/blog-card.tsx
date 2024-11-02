import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow, parseISO } from "date-fns"
import { BlogPost } from "@/lib/types"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <div className="grid md:grid-cols-3 gap-6 p-6">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <Badge className="w-fit mb-2">{post.category}</Badge>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time>{formatDistanceToNow(parseISO(post.date))} ago</time>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  )
}