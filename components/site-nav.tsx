"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Landmark, Scale, CircleCheckIcon } from "lucide-react";
import {   
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger, } from "@/components/ui/sheet" 
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function SiteNav() {

  const {theme} = useTheme();

  const servicios: { title: string; href: string; description: string }[] = [
  {
    title: "Capacitación",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Asesoría Legal",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Leyes y Tramites",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Servicios adicionales",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Otros",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        {/* Logo MJP Asesoria */}
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 font-medium text-lg tracking-tighter h-10 w-14 overflow-hidden"
          >
            <img
            src= {
              theme === "dark" ?
              "/mjp-asesoria-logo-white.png" :
              "/mjp-asesoria-logo-color.png" 
            }
              alt="Logotype MJP Asesoria"
              className="h-10 object-cover"
            />
          </Link>
        </div>   
        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Inicio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            {/* Home HIDDEN nice look nav element but not useful now*/}
            <NavigationMenuItem className="hidden">
              <NavigationMenuTrigger className="bg-background/25">Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed components built with Tailwind CSS.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Nosotros */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-background/25">Nosotros</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium flex gap-2"><Landmark/>Acerca de MJP Asesoría</div>
                        <div className="text-muted-foreground">
                          Quiénes somos, nuestra historia y las razones de nuestro trabajo.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium flex gap-2"><Scale/>Section link 2</div>
                        <div className="text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                      
                        <div className="font-medium flex gap-2"><CircleCheckIcon/>Section link 3</div>
                        <div className="text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, libero?
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          
            {/* Servicios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-background/25">Servicios</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {servicios.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contacto">Contacto</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toogle and Menu button (just in mobile) */}
        <div className="flex flex-1 w-full justify-end">
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="p-2" variant="outline">
                    <span className="sr-only">Menu</span>
                    <Menu className="h-10 w-10"/>
                    Menu
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-center">Menu</SheetTitle>
                    <SheetDescription>
                      Navega por nuestro sitio, haz click en la sección de tu interés.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="grid flex-1 auto-rows-min gap-0 px-4">
                    <SheetClose asChild>
                      <Link href="/">
                        <Button variant="outline" className="w-full">Inicio</Button>
                      </Link>
                    </SheetClose>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="nosotros" className="pt-4">
                        <AccordionTrigger>Nosotros</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2">
                            <li className="p-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground">
                              <SheetClose asChild>
                                <Link href="/">
                                  <div className="font-medium flex gap-2">
                                    <Landmark /> Acerca de MJP Asesoría
                                  </div>
                                  <div className="text-muted-foreground">
                                    Quiénes somos, nuestra historia y razones de nuestro trabajo.
                                  </div>
                                </Link>
                              </SheetClose>
                            </li>
                            <li className="p-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground">
                              <SheetClose asChild>
                                <Link href="#">
                                  <div className="font-medium flex gap-2">
                                    <Scale /> Section link 2
                                  </div>
                                  <div className="text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </div>
                                </Link>
                              </SheetClose>
                            </li>
                            <li className="p-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground">
                              <SheetClose asChild>
                                <Link href="#">
                                  <div className="font-medium flex gap-2">
                                    <CircleCheckIcon /> Section link 3
                                  </div>
                                  <div className="text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </div>
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Servicios with submenu */}
                      <AccordionItem value="servicios" className="pt-4">
                        <AccordionTrigger>Servicios</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2">
                            {servicios.map((s) => (
                              <li key={s.title} className="p-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground">
                                <SheetClose asChild>
                                  <Link href={s.href}>
                                    <div className="font-medium">{s.title}</div>
                                    <div className="text-muted-foreground">{s.description}</div>
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <SheetClose asChild>
                      <Link href="/contacto" className="pt-4">
                        <Button variant="outline" className="w-full">Contacto</Button>
                      </Link>
                    </SheetClose>


                  </nav>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="default">Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>        
              </Sheet>

            </div> 
          </nav>
        </div>
      </div>
    </header>
  );
}
