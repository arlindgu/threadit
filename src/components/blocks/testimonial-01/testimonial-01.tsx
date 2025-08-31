import React from "react";
import GenericsStudioLogo from "@/components/svgs/genericsstudio.svg";
import EsSelamLogo from "@/components/svgs/esselam.svg";
import SabauLogo from "@/components/svgs/sabau.svg";
import IsoplanungLogo from "@/components/svgs/isoplanung.svg";
import FahrschuleSuliLogo from "@/components/svgs/fahrschulesuli.svg";
import AMMontagenGmbHLogo from "@/components/svgs/ammontagengmbh.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    company: "Es-Selam",
    designation: "Religiöse Institution",
    name: "Es-Selam",
    logo: EsSelamLogo,
    testimonial:
      "Die Cloudlösung hilft uns bei der sicheren Verwaltung von Mitgliedsdaten und interner Organisation, stabil und einfach zu bedienen.",
    url: "https://es-selam.ch",
  },
  {
    id: 2,
    company: "SaBau",
    designation: "Bauwesen",
    name: "SaBau",
    logo: SabauLogo,
    testimonial:
      "Unsere Planungstools und Dokumente sind jetzt zentral zugänglich. Das spart Zeit und gibt uns mehr Übersicht im Alltag.",
    url: "https://sabau.ch/",
  },
  {
    id: 3,
    company: "Generics Studio",
    designation: "Webdesign und Entwicklung",
    name: "Generics Studio",
    logo: GenericsStudioLogo,
    testimonial:
      "Dank der Cloudlösung haben wir unsere Projekte, Assets und Kundenzugriffe zentral im Griff, ideal für unser kreatives Team.",
    url: "https://generics.studio",
  },
  {
    id: 4,
    company: "A&M Montagen",
    designation: "Fassadenbau und Malerei",
    name: "AM Montagen",
    logo: AMMontagenGmbHLogo,
    testimonial:
      "Unsere digitale Auftragsabwicklung läuft jetzt direkt über die Cloud, einfach, sicher und mobil zugänglich.",
    url: "https://am-montagen-gmbh.ch/",
  },
  {
    id: 5,
    company: "Fahrschule Suli",
    designation: "Fahrschule",
    name: "Fahrschule Suli",
    logo: FahrschuleSuliLogo,
    testimonial:
      "Wartungstermine, Kundeninfos und technische Dokumente – alles strukturiert in der Cloud. Das erleichtert unsere Arbeit enorm.",
    url: "https://suli.ch/#",
  },
  {
    id: 6,
    company: "ISOPLAN",
    designation: "Technik & Planung",
    name: "ISOPLAN",
    logo: IsoplanungLogo,
    testimonial:
      "Unsere Entwürfe, Moodboards und Kundenfreigaben sind jederzeit online verfügbar – das macht die Zusammenarbeit effizienter.",
    url: "https://isoplan-technik.ch/",
  },
];

const Testimonial01 = () => (
  <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
    <div>
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Was unsere Kunden sagen</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Hören Sie von unseren zufriedenen Kunden
        </p>
      </div>
      <div className="max-w-screen-xl space-y-8 mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 mt-12">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <CardAction>
                <Link href={testimonial.url} target="_blank">
                  <Button variant="ghost"><ArrowUpRight /></Button>
                </Link>
              </CardAction>
                <testimonial.logo className="h-12 fill-primary mb-4" />
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.designation}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{testimonial.testimonial}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial01;