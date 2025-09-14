'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { AnalysisForm } from "@/components/analysis-form";
import { Separator } from "@/components/ui/separator";

const carImages = [
    placeholderImages.find(p => p.id === 'car-1'),
    placeholderImages.find(p => p.id === 'car-2'),
    placeholderImages.find(p => p.id === 'car-3'),
].filter(Boolean) as any[];

export default function ServicesPage() {
    const { t } = useTranslation('services');
    const analysis = t('analysis', { returnObjects: true });
    const p2p = t('p2p', { returnObjects: true });
    const rental = t('rental', { returnObjects: true });

    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        {t('title')}
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="mt-16 mx-auto max-w-5xl space-y-12">
                    {/* Personalized Analysis */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl text-primary">{analysis.title}</CardTitle>
                            <CardDescription className="text-lg">{analysis.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="font-semibold text-accent">{analysis.price}</p>
                           
                            <Separator />

                            <div className="rounded-lg bg-background p-6 border">
                                <h3 className="font-headline text-xl font-semibold">{analysis.aiTool.title}</h3>
                                <p className="mt-2 text-muted-foreground">{analysis.aiTool.description}</p>
                                <div className="mt-4">
                                  <AnalysisForm />
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                    {/* P2P Binance Services */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{p2p.title}</CardTitle>
                            <CardDescription className="text-lg">{p2p.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm italic text-muted-foreground">{p2p.disclaimer}</p>
                            <Button className="mt-4">{p2p.cta}</Button>
                        </CardContent>
                    </Card>

                    {/* Car Rental */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{rental.title}</CardTitle>
                            <CardDescription className="text-lg">{rental.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-4">
                                <h4 className="font-semibold text-lg">{rental.galleryTitle}</h4>
                                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                    {carImages.map((img) => (
                                        <div key={img.id} className="overflow-hidden rounded-lg">
                                            <Image 
                                                src={img.imageUrl} 
                                                alt={img.description} 
                                                data-ai-hint={img.imageHint}
                                                width={600}
                                                height={400}
                                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button className="mt-6">{rental.cta}</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
