import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
        <div className="container mx-auto px-4 lg:my-36 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Cloud, die verbindet. Infrastruktur, die bleibt.
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
              Sichere und skalierbare Cloud-Lösungen für Unternehmen und Privatkunden in der Ostschweiz – verlässlich, flexibel und zukunftsorientiert.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Button size={"lg"}>
              <Link href="/contact">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button size={"lg"} variant={"outline"}>
              <Link href="/">Mehr erfahren</Link>
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      {/* End Hero */}
    </>
  );
}
