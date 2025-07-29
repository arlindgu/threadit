import { Button } from "@/components/ui/button";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              IT, die verbindet. Lösungen, die bleiben.
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
              Thread IT bietet zuverlässigen IT-Support, Cybersecurity und Cloud-Lösungen für Unternehmen und Privatkunden in der Ostschweiz.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Button size={"lg"}>Beratung anfragen</Button>
            <Button size={"lg"} variant={"outline"}>
              Mehr erfahren
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
