import { Card, CardContent } from "@/components/ui/card";
import {
  ServerIcon,
  NetworkIcon,
  CloudIcon,
  FolderCodeIcon,
  DatabaseBackupIcon,
  GaugeIcon,
} from "lucide-react";

const features = [
  {
    icon: ServerIcon,
    title: "Server",
    description:
      "Probleme mit Ihrem Server? Wir stellen sicher, dass Ihr Server wieder reibungslos läuft und all Ihre wichtigen Daten sicher verwaltet werden. ",
  },
  {
    icon: NetworkIcon,
    title: "Netzwerk",
    description: "Langsame Verbindung oder Ausfälle im Netzwerk? Wir sorgen dafür, dass Ihr Netzwerk stabil, sicher und effizient bleibt. ",
  },
  {
    icon: CloudIcon,
    title: "Cloud",
    description: "Bereit für die Cloud? Wir bieten flexible und skalierbare Cloud-Lösungen, die sich an Ihr Business anpassen. ",
  },
  {
    icon: GaugeIcon,
    title: "Performance",
    description: "Ihr System läuft langsam? Wir optimieren Ihre IT-Infrastruktur, um maximale Leistung und Effizienz sicherzustellen. ",
  },
  {
    icon: FolderCodeIcon,
    title: "Software",
    description:
      "Benötigen Sie eine individuelle Softwarelösung? Wir entwickeln und implementieren massgeschneiderte Software, die perfekt auf Ihre Bedürfnisse abgestimmt ist. ",
  },
  {
    icon: DatabaseBackupIcon,
    title: "Recovery",
    description:
      "Daten verloren? Keine Sorge, wir stellen Ihre wichtigen Dateien wieder her und sorgen für optimale Sicherheit. ",
  }
];

export default function FeatureSectionSimple() {
  return (
    <section id="dienstleistungen" className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Unsere Dienstleistungen
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Wir bieten eine breite Palette von IT-Support-Dienstleistungen an, um
          sicherzustellen, dass Ihr Unternehmen reibungslos läuft.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="p-0">
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
