import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CenterAligned() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
      {/* Title */}
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Frage eine Beratung an</h1>
        <p className="text-muted-foreground mt-3">
          Wir würden uns freuen, mit Ihnen darüber zu sprechen, wie wir Ihnen helfen können.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-lg">
        <Card className="p-0">
          <CardContent className="p-6">
            <h2 className="mb-8 text-xl font-semibold">Füllen Sie das Formular aus</h2>
            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <Label htmlFor="firstname" className="mb-2">
                      Vorname
                    </Label>
                    <Input
                      type="text"
                      id="firstname"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="mb-2">
                      Nachname
                    </Label>
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <Label htmlFor="email" className="mb-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="max@mustermann.ch"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2">
                      Telefonnummer
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+41 79 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2">
                    Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie Ihr Anliegen"
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <Button type="submit" size="lg">
                  Anfrage senden
                </Button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-muted-foreground text-sm">
                  Wir werden uns innerhalb von 1-2 Werktagen bei Ihnen melden.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
