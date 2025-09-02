import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PromoContent } from "@/components/promo-content";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import { ArrowLeft } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <HashScrollHandler />
      <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>

      <div className="space-y-4 border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 p-6">
          <div className="flex flex-wrap items-center gap-3 gap-y-5 text-sm text-muted-foreground">
            <Button variant="outline" asChild className="h-6 w-6">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Regresar</span>
              </Link>
            </Button>
           
              <div className="flex flex-wrap gap-3 text-muted-foreground">
                <span
                  className="h-6 w-fit px-3 text-sm font-medium bg-muted text-muted-foreground rounded-md border flex items-center justify-center"
                >
                  Regresar
                </span>
              </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance">
            Contáctanos
          </h1>

          
            <p className="text-muted-foreground max-w-4xl md:text-lg md:text-balance">
              Gracias por contactarnos etc etc Description here and there Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim facilis eligendi amet optio dolore sequi cumque quae voluptatem suscipit. Quis.
            </p>
      
        </div>
      </div>
      <div className="flex divide-x divide-border relative max-w-7xl mx-auto px-4 md:px-0 z-10">
        <div className="absolute max-w-7xl mx-auto left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] lg:w-full h-full border-x border-border p-0 pointer-events-none" />
        <main className="w-full p-0 overflow-hidden">
          
            <div className="relative w-full h-[500px] overflow-hidden object-cover border border-transparent">
              <Image
                src="/mjp-asesoria-logo-color.png"
                alt="alt image"
                fill
                className="object-contain p-12"
                priority
              />
            </div>
          
          <div className="p-6 lg:p-10">
            <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance prose-lg">
              Body of the post Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt?
            </div>
          </div>
        
        </main>

        <aside className="hidden lg:block w-[350px] flex-shrink-0 p-6 lg:p-10 bg-muted/60 dark:bg-muted/20">
          <div className="sticky top-20 space-y-8">
            {/* {page.data.author && isValidAuthor(page.data.author) && (
              <AuthorCard author={getAuthor(page.data.author)} />
            )} */}
            {/* <div className="border border-border rounded-lg p-6 bg-card">
              <TableOfContents />
            </div> */}
            {/* FOR SALE - Promotional sidebar link */}
            <PromoContent variant="desktop" />
          </div>
        </aside>
      </div>

      {/* <MobileTableOfContents /> */}
    </div>
  )
}