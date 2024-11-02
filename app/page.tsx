import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  const featuredEpisode = {
    id: 1,
    title: "The Future of AI: Opportunities and Challenges",
    description: "Explore the latest developments in artificial intelligence and their impact on society.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    duration: "18:32",
    category: "Tech Analysis",
  }

  const categories = [
    {
      title: "Tech Analysis",
      description: "Deep dives into the latest technology trends",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      href: "/categories/tech",
    },
    {
      title: "Political Insights",
      description: "Understanding global political landscapes",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop",
      href: "/categories/politics",
    },
    {
      title: "Cultural Trends",
      description: "Exploring contemporary cultural phenomena",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
      href: "/categories/culture",
    },
    {
      title: "Science Deep Dives",
      description: "Unraveling scientific discoveries",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop",
      href: "/categories/science",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dive Deeper into Knowledge
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Exploring complex topics through engaging video content and in-depth analysis
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/episodes">Watch Episodes</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest Episode</h2>
          <div className="relative group">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={featuredEpisode.thumbnail}
                alt={featuredEpisode.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Watch Now
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{featuredEpisode.duration}</span>
                <span>•</span>
                <span>{featuredEpisode.category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{featuredEpisode.title}</h3>
              <p className="text-muted-foreground">{featuredEpisode.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.title} className="group hover:shadow-lg transition-shadow">
                <Link href={category.href}>
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest episodes and insights
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}