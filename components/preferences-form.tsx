"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ScrollArea } from "@/components/ui/scroll-area"

const preferencesFormSchema = z.object({
  categories: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one category.",
  }),
  sources: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one source.",
  }),
  authors: z.array(z.string()),
})

type PreferencesFormValues = z.infer<typeof preferencesFormSchema>

const defaultValues: Partial<PreferencesFormValues> = {
  categories: ["technology", "science"],
  sources: ["bbc", "cnn"],
  authors: [],
}

const categories = ["Technology", "Science", "Politics", "Business", "Entertainment", "Sports", "Health", "Environment"]

const sources = [
  "BBC",
  "CNN",
  "Reuters",
  "Associated Press",
  "The New York Times",
  "The Guardian",
  "The Washington Post",
  "Al Jazeera",
]

const authors = [
  "John Smith",
  "Emma Johnson",
  "Michael Brown",
  "Sarah Davis",
  "David Wilson",
  "Jennifer Lee",
  "Robert Taylor",
  "Lisa Anderson",
]

export function PreferencesForm() {
  const form = useForm<PreferencesFormValues>({
    resolver: zodResolver(preferencesFormSchema),
    defaultValues,
  })

  function onSubmit(data: PreferencesFormValues) {
    console.log(data)
    // TODO: Implement preferences update logic
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="categories"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Categories</FormLabel>
                <FormDescription>Select the categories you're interested in.</FormDescription>
              </div>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="categories"
                      render={({ field }) => {
                        return (
                          <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.toLowerCase())}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.toLowerCase()])
                                    : field.onChange(field.value?.filter((value) => value !== item.toLowerCase()))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item}</FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
              </ScrollArea>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sources"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sources</FormLabel>
                <FormDescription>Select your preferred news sources.</FormDescription>
              </div>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  {sources.map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="sources"
                      render={({ field }) => {
                        return (
                          <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.toLowerCase().replace(/ /g, "-"))}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.toLowerCase().replace(/ /g, "-")])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== item.toLowerCase().replace(/ /g, "-")),
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item}</FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
              </ScrollArea>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="authors"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Authors</FormLabel>
                <FormDescription>Select your preferred authors.</FormDescription>
              </div>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  {authors.map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="authors"
                      render={({ field }) => {
                        return (
                          <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.toLowerCase().replace(/ /g, "-"))}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.toLowerCase().replace(/ /g, "-")])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== item.toLowerCase().replace(/ /g, "-")),
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item}</FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
              </ScrollArea>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update preferences</Button>
      </form>
    </Form>
  )
}

