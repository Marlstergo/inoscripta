import { Sidebar } from "@/components/sidebar"
import { SearchResults } from "@/components/search-results"

export default function SearchPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="lg:flex lg:gap-8">
        <div className="lg:flex-1">
          <SearchResults />
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

