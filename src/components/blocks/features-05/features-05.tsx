import { Card, CardHeader } from "@/components/ui/card";
import {
  Cross,
  ShieldCheck,
  CircleCheck

} from "lucide-react";

const features = [
  {
    icon: Cross,
    title: "Schweizer Hosting",
    description:
      "Ihre Daten bleiben sicher in zertifizierten Schweizer Rechenzentren – datenschutzkonform und souverän.",
    src: "/swissalps.png"
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-Konformität",
    description:
      "Rechtskonform in der gesamten EU – dank vollständiger Einhaltung der Datenschutz-Grundverordnung.",
    src: "/dsgvo.png"
  },
  {
    icon: CircleCheck,
    title: "ISO-Zertifiziert",
    description:
      "Verlassen Sie sich auf geprüfte Sicherheit und Verfügbarkeit nach ISO 27001 & 9001 Standards.",
    src: "/iso.png"
  },
];

const Features05Page = () => {
  return (
    <div className="flex items-center justify-center container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="max-w-screen-lg w-full py-10 px-6">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Vertrauen durch Sicherheit
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Ihre Daten verdienen mehr als Standardlösungen. Mit Hosting in der Schweiz, DSGVO-Konformität und zertifizierten Rechenzentren bieten wir die Grundlage für stabile, sichere und rechtssichere Cloud-Dienstleistungen.
        </p>
      </div>
        <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <feature.icon className="stroke-primary stroke-2 size-12" />
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
