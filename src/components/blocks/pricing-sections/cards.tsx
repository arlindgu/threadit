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

export default function PricingSectionCards() {

  const packages = [
    {
      title: "Ohne Paket",
      price: "CHF 149",
      description: "pro Stunde",
      features: [
        "Fahrspesen CHF 1.00 pro km",
        "Fahrtzeit gilt als Arbeitszeit",
        "Zahlung per Rechnung",
      ],
      variant: "outline",
    },
    {
      title: "Support 10",
      price: "CHF 139",
      description: "pro Stunde",
      features: [
        "10 Stunden IT-Support",
        "Automatische Abbuchung",
        "Rechnung im Voraus",
      ],
      variant: "outline",
    },
    {
      title: "Support 20",
      price: "CHF 134",
      description: "pro Stunde",
      features: [
        "20 Stunden IT-Support",
        "Automatische Abbuchung",
        "Rechnung im Voraus",
      ],
      variant: "",
    },
    {
      title: "Support 40",
      price: "CHF 129",
      description: "pro Stunde",
      features: [
        "40 Stunden IT-Support",
        "Automatische Abbuchung",
        "Rechnung im Voraus",
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
          Stundenpakete IT-Support
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
Mehr Support zum günstigeren Preis
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
                pkg.title === "Support 20" ? "border-primary" : ""
              }`}
            >
              <CardHeader className="text-center pb-2">
                {pkg.title === "Support 20" && (
                  <Badge className="uppercase w-max self-center mb-3">empfohlen</Badge>
                )}
                <CardTitle className={pkg.title === "Support 20" ? "!mb-7" : "mb-7"}>
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
                  Beratung anfragen
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
