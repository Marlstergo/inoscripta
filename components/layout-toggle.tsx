"use client"

import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"

interface LayoutToggleProps {
  layout: "grid" | "list"
  setLayout: (layout: "grid" | "list") => void
}

export function LayoutToggle({ layout, setLayout }: LayoutToggleProps) {
  return (
    <div className="flex space-x-2">
      <Button variant={layout === "grid" ? "default" : "outline"} size="icon" onClick={() => setLayout("grid")}>
        <Grid className="h-4 w-4" />
      </Button>
      <Button variant={layout === "list" ? "default" : "outline"} size="icon" onClick={() => setLayout("list")}>
        <List className="h-4 w-4" />
      </Button>
    </div>
  )
}

