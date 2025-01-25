"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { NewsCard } from "@/components/news-card"
import { LayoutToggle } from "@/components/layout-toggle"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"

const newsItems = [
  {
    id: "1",
    title: "Breaking News: Major Development in Technology Sector",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    date: "2 hours ago",
  },
  {
    id: "2",
    title: "Economic Growth Surpasses Expectations",
    image: "/placeholder.svg?height=400&width=600",
    category: "Business",
    date: "3 hours ago",
  },
  {
    id: "3",
    title: "New Scientific Discovery Announced",
    image: "/placeholder.svg?height=200&width=400",
    category: "Science",
    date: "4 hours ago",
  },
  {
    id: "4",
    title: "Global Climate Summit Reaches Landmark Agreement",
    image: "/placeholder.svg?height=200&width=400",
    category: "Environment",
    date: "5 hours ago",
  },
  {
    id: "5",
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    date: "6 hours ago",
  },
  {
    id: "6",
    title: "Stock Market Hits Record High Amid Economic Optimism",
    image: "/placeholder.svg?height=200&width=400",
    category: "Finance",
    date: "7 hours ago",
  },
  {
    id: "7",
    title: "Breakthrough in Renewable Energy Technology",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    date: "8 hours ago",
  },
  {
    id: "8",
    title: "Major Merger Shakes Up Tech Industry",
    image: "/placeholder.svg?height=200&width=400",
    category: "Business",
    date: "9 hours ago",
  },
  {
    id: "9",
    title: "New Study Reveals Surprising Health Benefits",
    image: "/placeholder.svg?height=200&width=400",
    category: "Health",
    date: "10 hours ago",
  },
  {
    id: "10",
    title: "Space Exploration Mission Discovers New Exoplanet",
    image: "/placeholder.svg?height=200&width=400",
    category: "Science",
    date: "11 hours ago",
  },
  {
    id: "11",
    title: "Global Initiative Launched to Combat Climate Change",
    image: "/placeholder.svg?height=200&width=400",
    category: "Environment",
    date: "12 hours ago",
  },
  {
    id: "12",
    title: "Artificial Intelligence Breakthrough in Natural Language Processing",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    date: "13 hours ago",
  },
]

export function NewsFeed() {
  const router = useRouter()
  const [layout, setLayout] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [dateFilter, setDateFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sourceFilter, setSourceFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState<typeof newsItems>([])

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      // Simulate API call with 2 second delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setNews(newsItems)
      setLoading(false)
    }

    fetchNews()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const searchParams = new URLSearchParams({
        q: searchQuery,
        date: dateFilter,
        category: categoryFilter,
        source: sourceFilter,
      })
      router.push(`/search?${searchParams.toString()}`)
    }
  }

  return (
    <>
      <div className="mb-6 space-y-4">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="shrink-0">
              Search
            </Button>
          </div>
          <div className="flex space-x-4">
            <Select onValueChange={setDateFilter} value={dateFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This week</SelectItem>
                <SelectItem value="month">This month</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setCategoryFilter} value={categoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="science">Science</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setSourceFilter} value={sourceFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sources</SelectItem>
                <SelectItem value="techcrunch">TechCrunch</SelectItem>
                <SelectItem value="nytimes">New York Times</SelectItem>
                <SelectItem value="bbc">BBC News</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Top Stories</h2>
          <LayoutToggle layout={layout} setLayout={setLayout} />
        </div>

        {/* Featured stories - 2 column layout */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {loading
            ? Array(2)
                .fill(0)
                .map((_, index) => <Skeleton key={index} className="w-full h-[300px]" />)
            : news
                .slice(0, 2)
                .map((item) => (
                  <NewsCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    date={item.date}
                    layout="grid"
                    featured={true}
                  />
                ))}
        </div>

        {/* Regular stories - 4 column layout on larger screens */}
        <div className={`grid gap-6 ${layout === "grid" ? "sm:grid-cols-2 lg:grid-cols-4" : ""}`}>
          {loading
            ? Array(12)
                .fill(0)
                .map((_, index) => <Skeleton key={index} className="w-full h-[200px]" />)
            : news
                .slice(2)
                .map((item) => (
                  <NewsCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    date={item.date}
                    layout={layout}
                    featured={false}
                  />
                ))}
        </div>
      </div>
    </>
  )
}

