import React from "react";
import GenericsLogo from '@/components/svgs/genericsstudio.svg'
import EsSelamLogo from '@/components/svgs/esselam.svg'
import GfHaustechnik from '@/components/svgs/gf.svg'
import SabauLogo from '@/components/svgs/sabau.svg'
import AiLogo from '@/components/svgs/ai.svg'
import RaumKulturLogo from '@/components/svgs/raumkultur.svg'


const testimonials = [
  {
    id: 1,
    company: "Es-Selam Moschee",
    designation: "Religiöse Institution",
    name: "Es-Selam",
    logo: EsSelamLogo,
    testimonial:
      "Die Cloudlösung hilft uns bei der sicheren Verwaltung von Mitgliedsdaten und interner Organisation – stabil und einfach zu bedienen.",
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
    url: "https://hdcleanservice.ch",
  },
  {
    id: 3,
    company: "Generics Studio",
    designation: "Webdesign & Entwicklung",
    name: "Generics Studio",
    logo: GenericsLogo,
    testimonial:
      "Dank der Cloudlösung haben wir unsere Projekte, Assets und Kundenzugriffe zentral im Griff – ideal für unser kreatives Team.",
    url: "https://generics.studio",
  },
  {
    id: 4,
    company: "Semi Services",
    designation: "Fassadenbau & Malerei",
    name: "Semi Services",
    logo: RaumKulturLogo,
    testimonial:
      "Unsere digitale Auftragsabwicklung läuft jetzt direkt über die Cloud – einfach, sicher und mobil zugänglich.",
    url: "https://semiservices.ch",
  },
  {
    id: 5,
    company: "GF Haustechnik",
    designation: "Heizungs- und Gebäudetechnik",
    name: "GF Haustechnik",
    logo: GfHaustechnik,
    testimonial:
      "Wartungstermine, Kundeninfos und technische Dokumente – alles strukturiert in der Cloud. Das erleichtert unsere Arbeit enorm.",
    url: "https://gf-h.ch",
  },
  {
    id: 6,
    company: "Alimi Design",
    designation: "Interior Design Studio",
    name: "Alimi Design",
    logo: AiLogo,
    testimonial:
      "Unsere Entwürfe, Moodboards und Kundenfreigaben sind jederzeit online verfügbar – das macht die Zusammenarbeit effizienter.",
    url: "https://al-i.ch",
  },
];

const Testimonial01 = () => (

  console.log(testimonials[2].logo),

  <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
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
            className="mb-8 border-1 rounded-xl p-6 break-inside-avoid"
          >
            {testimonial.logo && (
              <div className="mb-4">
                <testimonial.logo className="h-12 w-auto fill-primary" />
              </div>
            )}
            
            <h3 className="text-xl font-semibold">{testimonial.company}</h3>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>

            {/* <div className="flex items-center justify-between">
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
              <Button variant="ghost" asChild>
              <Link href={testimonial.url} target="_blank">
                <TwitterLogo className="h-full" />
              </Link>
              </Button>
            </div> */}
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial01;
