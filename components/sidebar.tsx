"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export function Sidebar() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with 2 second delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular News</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                ))
            : [1, 2, 3].map((i) => (
                <div key={i} className="space-y-1">
                  <Badge variant="secondary" className="text-xs">
                    Technology
                  </Badge>
                  <h4 className="font-medium text-sm">Latest Technology Trends for 2025</h4>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-wrap gap-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20" />
                ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Technology</Badge>
              <Badge variant="outline">Business</Badge>
              <Badge variant="outline">Science</Badge>
              <Badge variant="outline">Health</Badge>
              <Badge variant="outline">Sports</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

