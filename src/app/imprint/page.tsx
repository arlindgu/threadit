import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function ImprintPage() {
    return (
        <>
        <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
            <div className="flex flex-col gap-8 w-fit mx-auto lg:flex-row">
            <Card>
                <CardHeader>
                    <CardTitle>Impressum</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Thread IT GmbH<br />
                        Gesellschaft mit beschränkter Haftung<br />
                        CHE-362.515.125<br />
                        CH-440-4043102-0
                    </CardDescription>
                </CardContent>
            </Card>
                        <Card>
                <CardHeader>
                    <CardTitle>Kontaktdaten</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Winterthurerstrasse 56<br />
                        8370 Sirnach<br />
                        Schweiz<br />
                        <a href="mailto:info@threadit.ch">info@threadit.ch</a><br />
                        <a href="tel:+41794444444">+41 79 444 44 44</a>
                    </CardDescription>
                </CardContent>
            </Card>

                                    <Card>
                                                    <CardHeader>
                <CardTitle>Vertretungsberechtigte Personen</CardTitle>
            </CardHeader>
                <CardContent>
                    <CardDescription>
                        Omer Asipi (Geschäftsführer)<br />
                    </CardDescription>
                </CardContent>
            </Card>
            </div>
        </section>
        
        </>
    );
}