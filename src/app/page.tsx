import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Pen className="h-6 w-6" />
          <span className="sr-only">Lekhak</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Lekhak
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The ultimate blog writing system for creators. Streamline your
                  writing process and unleash your creativity.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Coming Soon!
                </p>
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Notify Me</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Be the first to know when we launch. No spam, we promise!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Sneak Peek
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get a glimpse of Lekhak's intuitive interface and powerful
                  features.
                </p>
              </div>
              <div className="mx-auto max-w-4xl">
                {/* <Image
                alt="Lekhak Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="600"
                src="/placeholder.svg"
                width="1200"
              /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Lekhak. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
