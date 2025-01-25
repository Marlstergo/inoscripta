import { Separator } from "@/components/ui/separator"
import { PreferencesForm } from "@/components/preferences-form"

export default function SettingsPreferencesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your news feed by selecting your preferred sources, categories, and authors.
        </p>
      </div>
      <Separator />
      <PreferencesForm />
    </div>
  )
}

