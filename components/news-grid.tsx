import type React from "react"
import { useState } from "react"
import { NewsCard } from "./news-card"
import { LayoutToggle } from "./layout-toggle"

interface NewsItem {
    id: string
    title: string
    image: string
    category: string
    date: string
}

const NewsFeed: React.FC = () => {
    const [layout, setLayout] = useState<"grid" | "list">("grid")
    const newsItems: NewsItem[] = [
        {
            id: "1",
            title: "News Item 1",
            image: "",
            category: "Category A",
            date: "2024-07-26",
        },
        {
            id: "2",
            title: "News Item 2",
            image: "",
            category: "Category B",
            date: "2024-07-25",
        },
        {
            id: "3",
            title: "News Item 3",
            image: "",
            category: "Category C",
            date: "2024-07-24",
        },
        {
            id: "4",
            title: "News Item 4",
            image: "",
            category: "Category A",
            date: "2024-07-23",
        },
        {
            id: "5",
            title: "News Item 5",
            image: "",
            category: "Category B",
            date: "2024-07-22",
        },
        {
            id: "6",
            title: "News Item 6",
            image: "",
            category: "Category C",
            date: "2024-07-21",
        },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Top Stories</h2>
                <LayoutToggle layout={layout} setLayout={setLayout} />
            </div>

            {/* Featured stories - 2 column layout */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
                {newsItems.slice(0, 2).map((item) => (
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

            {/* Regular stories - 4 column layout */}
            <div
                className={`grid gap-6 ${
                    layout === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        : ""
                }`}
            >
                {newsItems.slice(2).map((item) => (
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

export default NewsFeed
