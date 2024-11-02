import Link from "next/link"
import { Youtube, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="text-sm text-muted-foreground">
                DeeperDivers brings you in-depth analysis of tech, politics,
                culture, and science through engaging video content.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/episodes" className="text-sm text-muted-foreground hover:text-primary">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-sm text-muted-foreground hover:text-primary">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/categories/tech" className="text-sm text-muted-foreground hover:text-primary">
                    Tech Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/categories/politics" className="text-sm text-muted-foreground hover:text-primary">
                    Political Insights
                  </Link>
                </li>
                <li>
                  <Link href="/categories/culture" className="text-sm text-muted-foreground hover:text-primary">
                    Cultural Trends
                  </Link>
                </li>
                <li>
                  <Link href="/categories/science" className="text-sm text-muted-foreground hover:text-primary">
                    Science Deep Dives
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/DeeperDivers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com/@DeeperDivers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/DeeperDivers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} DeeperDivers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer