export interface Episode {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  category: string
  date: string
  views: number
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  date: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
}