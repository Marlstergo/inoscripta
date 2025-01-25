"use client"

import { useState } from "react"
import { NewsCard } from "@/components/news-card"
import { LayoutToggle } from "@/components/layout-toggle"

const searchResults = [
  {
    id: "1",
    title: "Breaking News: Major Development in Technology Sector",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    date: "2 hours ago",
  },
  {
    id: "2",
    title: "Economic Growth Surpasses Expectations",
    image: "/placeholder.svg?height=200&width=400",
    category: "Business",
    date: "3 hours ago",
  },
  // Add more mock results...
]

export function SearchResults() {
  const [layout, setLayout] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <LayoutToggle layout={layout} setLayout={setLayout} />
      </div>
      <div className={`grid gap-6 ${layout === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
        {searchResults.map((item) => (
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
  )
}

