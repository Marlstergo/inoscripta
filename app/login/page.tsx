import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden w-1/2 bg-gray-100 lg:block">
        <div className="flex h-full flex-col justify-between p-8 lg:p-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Stay Informed with AGGREGATOR</h1>
            <p className="text-lg text-gray-600">
              Your one-stop destination for curated news from trusted sources worldwide.
            </p>
          </div>
          <Image
            src="/placeholder.svg"
            alt="News Illustration"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-md space-y-8 px-4 sm:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-900">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required className="w-full" />
            </div>
            <Button className="w-full bg-black hover:bg-gray-900">Sign in</Button>
          </form>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

