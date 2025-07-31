"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import ModeToggle from "./toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Impressum", href: "/imprint" },
  { name: "Kontakt", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 242 169"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 1.5,
                  }}
                >
                  <g transform="matrix(1,0,0,1,-468.13,-447.255)">
                    <g transform="matrix(1,0,0,1,42.4419,-2.4905)">
                      <path
                        d="M483.271,456.053C483.271,456.053 508.948,453.961 499.064,475.061C489.18,496.161 421.164,522.866 433.408,540C445.651,557.134 575.094,445.344 570.728,470.054C566.363,494.765 435.043,585.473 479.11,593.174C523.177,600.875 656.533,486.228 620.705,540C584.876,593.772 551.766,602.662 570.125,610.59C588.485,618.518 639.054,587.446 661.423,566.056"
                        style={{
                          fill: "none",
                          stroke: "var(--primary)",
                          strokeWidth: "12.5px",
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <span className="font-bold text-xl">Thread IT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className="flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex space-x-4">
            <Button className="w-fit">
              <Link href="/contact" className="text-white">
                Kontakt
              </Link>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  {/* <span className="sr-only">Open main menu</span> */}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Main navigation for the website
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4 p-6">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 242 169"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 1.5,
                        }}
                      >
                        <g transform="matrix(1,0,0,1,-468.13,-447.255)">
                          <g transform="matrix(1,0,0,1,42.4419,-2.4905)">
                            <path
                              d="M483.271,456.053C483.271,456.053 508.948,453.961 499.064,475.061C489.18,496.161 421.164,522.866 433.408,540C445.651,557.134 575.094,445.344 570.728,470.054C566.363,494.765 435.043,585.473 479.11,593.174C523.177,600.875 656.533,486.228 620.705,540C584.876,593.772 551.766,602.662 570.125,610.59C588.485,618.518 639.054,587.446 661.423,566.056"
                              style={{
                                fill: "none",
                                stroke: "var(--primary)",
                                strokeWidth: "12.5px",
                              }}
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span className="font-bold text-xl">Thread IT</span>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t flex-col flex justify-center items-center">
                    <Button className="w-full">
                      <Link href="/contact" className="text-white">
                        Kontakt
                      </Link>
                    </Button>
                    <div className="mt-4">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
