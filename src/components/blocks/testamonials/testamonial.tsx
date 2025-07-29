import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TestamonialSectionCards() {
  const testimonials = [
    {
      company: "Es-Selam",
      name: "Magbul Idrizi",
      position: "Imam",
      content:
        "Unsere internen Systeme wurden professionell modernisiert und laufen seitdem stabil und zuverlässig.",
    },
    {
      company: "HD Clean Service GmbH",
      name: "Ajnore Salihi",
      position: "Geschäftsleitung",
      content:
        "Unsere Einsatzplanung und Kundenverwaltung funktioniert jetzt komplett digital – effizient und zeitsparend.",
    },
    {
      company: "Carrosserie Idrizi",
      name: "Ardit Idrizzi",
      position: "Geschäftsleitung",
      content:
        "Schneller Support, klare Lösungen – genau das, was ein kleiner Betrieb wie wir braucht.",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Was unsere Kunden sagen</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Hören Sie von unseren zufriedenen Kunden
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <Card
            className={`flex flex-col ${
              index === testimonials.length - 1
                ? "sm:col-span-2 lg:col-span-1"
                : ""
            }`}
            key={index}
          >
            <CardHeader className="text-xl">
              <CardTitle>{testimonial.company}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 italic">
              <p>{testimonial.content}</p>
            </CardContent>
            <CardFooter>
              <div className="text-sm">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-muted-foreground">
                  {testimonial.position} | {testimonial.company}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
