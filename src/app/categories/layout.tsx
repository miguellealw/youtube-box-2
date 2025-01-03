import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full gap-16">
      <nav className="h-screen bg-gray-900 text-gray-100">
        <ScrollArea className="h-full w-[200px]">
          <div className="space-y-4 py-4">
            <div className="px-4 py-2">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={21}
                priority
                className="mb-8"
              />
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Link href="/categories">
                    Categories
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Link href="/subscriptions">
                    Subscriptions
                  </Link>
                </Button>

                <hr className="my-4 border-gray-700" />
                <h3 className="px-4 py-2 text-xs font-medium text-gray-400">Categories</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-xs text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Link href="/categories/technology">
                      Technology
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-xs text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Link href="/categories/gaming">
                      Gaming
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-xs text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Link href="/categories/education">
                      Education
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </nav>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}