import { NewsFeed } from "@/components/news-feed"
import { Sidebar } from "@/components/sidebar"

export default function TechnologyPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="lg:flex lg:gap-8">
        <div className="lg:flex-1">
          <h1 className="text-3xl font-bold mb-6">Technology News</h1>
          <NewsFeed />
        </div>
        <div className="hidden lg:block lg:w-[300px]">
          <div className="sticky top-20">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

