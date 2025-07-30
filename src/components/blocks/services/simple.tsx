import { Card, CardContent } from "@/components/ui/card";
import {
  CloudIcon,
  ServerIcon,
  NetworkIcon,
  DatabaseBackupIcon,
  ShieldCheckIcon,
  GaugeIcon,
} from "lucide-react";

const features = [
  {
    icon: CloudIcon,
    title: "Cloud-Lösungen",
    description:
      "Ob Private, Public oder Hybrid Cloud – wir entwickeln skalierbare Cloud-Infrastrukturen, die perfekt zu Ihrem Unternehmen passen.",
  },
  {
    icon: ServerIcon,
    title: "Cloud Hosting",
    description:
      "Wir hosten Ihre Applikationen, Websites und Daten in sicheren, leistungsstarken Cloud-Umgebungen – auf Wunsch auch in der Schweiz.",
  },
  {
    icon: NetworkIcon,
    title: "Cloud-Netzwerke",
    description:
      "Wir verbinden Ihre Standorte, Endgeräte und Dienste über stabile, sichere und intelligente Cloud-Netzwerke.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cloud Security",
    description:
      "Datenschutz, Zugriffskontrolle und Ausfallsicherheit – wir sichern Ihre Cloud-Umgebung nach höchsten Standards.",
  },
  {
    icon: GaugeIcon,
    title: "Optimierung & Skalierung",
    description:
      "Wir analysieren und optimieren Ihre bestehende Cloud-Infrastruktur und sorgen für Performance, die mitwächst.",
  },
  {
    icon: DatabaseBackupIcon,
    title: "Backup & Recovery",
    description:
      "Automatisierte Backups und schnelle Wiederherstellung – damit Ihre Daten jederzeit verfügbar bleiben.",
  },
];

export default function FeatureSectionSimple() {
  return (
    <section id="dienstleistungen" className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Unsere Dienstleistungen
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Wir bieten eine breite Palette von Cloud-Lösungen an, um sicherzustellen, dass Ihre IT-Infrastruktur sicher, skalierbar und zukunftsfähig bleibt.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="p-0 shadow-none">
            <CardContent className="space-y-2 p-6">
              <feature.icon className="text-primary h-12 w-12" />
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
