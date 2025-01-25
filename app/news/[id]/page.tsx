import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"

// This is a mock function to fetch news data. In a real application, you would fetch this data from an API or database.
async function getNewsItem(id: string) {
  const newsItems = [
    {
      id: "1",
      title: "Breaking News: Major Development in Technology Sector",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Technology",
      date: "2 hours ago",
      author: "John Doe",
    },
    // Add more mock news items here...
  ]

  const item = newsItems.find((item) => item.id === id)
  if (!item) notFound()
  return item
}

export default async function NewsPage({ params }: { params: { id: string } }) {
  const newsItem = await getNewsItem(params.id)

  return (
    <article className="container max-w-4xl px-4 py-6 lg:py-10">
      <Badge variant="secondary" className="mb-2">
        {newsItem.category}
      </Badge>
      <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{newsItem.title}</h1>
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <span>{newsItem.author}</span>
        <span>•</span>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </div>
      <Image
        src={newsItem.image || "/placeholder.svg"}
        alt={newsItem.title}
        width={800}
        height={400}
        className="my-8 rounded-lg object-cover"
      />
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-base leading-7 text-muted-foreground">{newsItem.content}</p>
      </div>
    </article>
  )
}

