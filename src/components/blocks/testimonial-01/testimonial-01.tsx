import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    company: "Es-Selam Moschee",
    designation: "Religiöse Institution",
    name: "Es-Selam Moschee",
    testimonial:
      "Die Cloudlösung hilft uns bei der sicheren Verwaltung von Mitgliedsdaten und interner Organisation – stabil und einfach zu bedienen.",
    url: "https://es-selam.ch",
  },
  {
    id: 2,
    company: "HD CLEAN SERVICE",
    designation: "Gebäudereinigung",
    name: "HD CLEAN SERVICE",
    testimonial:
      "Unsere Planungstools und Dokumente sind jetzt zentral zugänglich. Das spart Zeit und gibt uns mehr Übersicht im Alltag.",
    url: "https://hdcleanservice.ch",
  },
  {
    id: 3,
    company: "Generics Studio",
    designation: "Webdesign & Entwicklung",
    name: "Generics Studio",
    testimonial:
      "Dank der Cloudlösung haben wir unsere Projekte, Assets und Kundenzugriffe zentral im Griff – ideal für unser kreatives Team.",
    url: "https://generics.studio",
  },
  {
    id: 4,
    company: "Semi Services",
    designation: "Fassadenbau & Malerei",
    name: "Semi Services",
    testimonial:
      "Unsere digitale Auftragsabwicklung läuft jetzt direkt über die Cloud – einfach, sicher und mobil zugänglich.",
    url: "https://semiservices.ch",
  },
  {
    id: 5,
    company: "GF Haustechnik",
    designation: "Heizungs- und Gebäudetechnik",
    name: "GF Haustechnik",
    testimonial:
      "Wartungstermine, Kundeninfos und technische Dokumente – alles strukturiert in der Cloud. Das erleichtert unsere Arbeit enorm.",
    url: "https://gf-h.ch",
  },
  {
    id: 6,
    company: "Alimi Design",
    designation: "Interior Design Studio",
    name: "Alimi Design",
    testimonial:
      "Unsere Entwürfe, Moodboards und Kundenfreigaben sind jederzeit online verfügbar – das macht die Zusammenarbeit effizienter.",
    url: "https://al-i.ch",
  },
];

const Testimonial01 = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Was unsere Kunden sagen</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Hören Sie von unseren zufriedenen Kunden
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 mt-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 border border-1 rounded-xl p-6 break-inside-avoid"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={testimonial.url} target="_blank">
                  <TwitterLogo className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
  >
    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    <path d="m21 3-9 9" />
    <path d="M15 3h6v6" />
  </svg>
);

export default Testimonial01;
