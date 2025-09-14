'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { CheckCircle, Star } from "lucide-react";

export default function CommunityPage() {
    const { t } = useTranslation('community');
    const pricing = t('pricing', { returnObjects: true });
    const benefits = t('benefits', { returnObjects: true });
    const teaser = t('teaser', { returnObjects: true });

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

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{benefits.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6 text-muted-foreground">{t('description')}</p>
                                <ul className="space-y-4">
                                    {benefits.list.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <Star className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                         <Card className="border-2 border-primary shadow-lg">
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-2xl">{pricing.title}</CardTitle>
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-5xl font-bold tracking-tight">{pricing.price}</span>
                                    <span className="text-xl text-muted-foreground">{pricing.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{pricing.description}</p>
                            </CardHeader>
                            <CardContent>
                                <Button size="lg" className="w-full">{t('cta')}</Button>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{teaser.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="italic text-muted-foreground">"{teaser.content}"</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
