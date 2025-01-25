import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  id: string
  title: string
  image: string
  category: string
  date: string
  layout: "grid" | "list"
  featured?: boolean
}

export function NewsCard({ id, title, image, category, date, layout, featured }: NewsCardProps) {
  return (
    <Card className={`overflow-hidden ${featured ? "col-span-1" : ""}`}>
      <Link href={`/news/${id}`}>
        <CardContent className={`p-0 ${layout === "list" ? "flex" : ""}`}>
          <div className={layout === "list" ? "w-1/3" : ""}>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={featured ? 800 : 400}
              height={featured ? 400 : 200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`p-4 ${layout === "list" ? "w-2/3" : ""}`}>
            <Badge variant="secondary" className="mb-2">
              {category}
            </Badge>
            <h3 className={`mb-2 font-bold ${featured ? "text-2xl" : layout === "list" ? "text-xl" : "text-lg"}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

