import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function PricingSectionCards() {

  const packages = [
  {
    title: "Starter",
    price: "CHF 49",
    description: "pro Monat",
    features: [
      "1 Cloud-Instanz",
      "10 GB Speicher",
      "E-Mail Support",
      "Tägliches Backup",
    ],
    variant: "outline",
  },
  {
    title: "Business",
    price: "CHF 89",
    description: "pro Monat",
    features: [
      "3 Cloud-Instanzen",
      "100 GB Speicher",
      "Telefon & E-Mail Support",
      "Tägliches Backup",
      "SSL & Monitoring",
    ],
    variant: "", // empfohlen
  },
  {
    title: "Enterprise",
    price: "CHF 139",
    description: "pro Monat",
    features: [
      "Unbegrenzte Instanzen",
      "1 TB Speicher",
      "Priorisierter Support (24/7)",
      "Geo-Redundanz & tägliches Backup",
      "Individuelle SLA & Beratung",
    ],
    variant: "outline",
  },
  {
    title: "Custom",
    price: "Auf Anfrage",
    description: "individuell konfiguriert",
    features: [
      "Massgeschneiderte Cloud-Architektur",
      "Infrastrukturberatung & Setup",
      "Support nach Vereinbarung",
      "Skalierbarkeit nach Bedarf",
    ],
    variant: "outline",
  },
];

  return (
    <>
      {/* Pricing */}
      <div id="preisliste" className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Title */}
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Preise
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Unabhängig von Ihrem Status passen wir unsere Angebote Ihren Bedürfnissen an.
        </p>
      </div>
        {/* End Title */}

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {/* Card */}
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={`flex flex-col ${
                pkg.title === "Business" ? "border-primary" : ""
              }`}
            >
              <CardHeader className="text-center pb-2 relative">
                {pkg.title === "Business" && (
                  <Badge className="uppercase mx-auto absolute -top-9 inset-x-0 self-center mb-3">empfohlen</Badge>
                )}
                <CardTitle className={pkg.title === "Business" ? "!mb-7" : "mb-7"}>
                  {pkg.title}
                </CardTitle>
                <span className="font-bold text-5xl">{pkg.price}</span>
              </CardHeader>
              <CardDescription className="text-center w-11/12 mx-auto">
                {pkg.description}
              </CardDescription>
              <CardContent className="flex-1">
                <ul className="mt-7 space-y-2.5 text-sm">
                  {pkg.features.map((feature, i) => (
                    <li className="flex space-x-2" key={i}>
                      <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={pkg.variant as "outline" | "default"}
                >
                  <Link href="/contact">Beratung anfragen</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Pricing */}
    </>
  );
}
