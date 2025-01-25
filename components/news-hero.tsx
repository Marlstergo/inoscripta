import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsHeroProps {
  title: string
  image: string
  category: string
  date: string
}

export function NewsHero({ title, image, category, date }: NewsHeroProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={400}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <Badge variant="secondary" className="mb-2">
              {category}
            </Badge>
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-200">{date}</p>
            <Button variant="secondary" className="mt-4">
              Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

