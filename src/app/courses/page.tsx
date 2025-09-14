'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { CheckCircle } from "lucide-react";

export default function CoursesPage() {
    const { t } = useTranslation('courses');
    const tradingCourse = t('trading', { returnObjects: true });
    const holdingCourse = t('holding', { returnObjects: true });
    const benefits = t('benefits', { returnObjects: true });

    const courses = [
        { ...tradingCourse, key: 'trading' },
        { ...holdingCourse, key: 'holding' }
    ];

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

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:items-start">
                    {courses.map(course => (
                        <Card key={course.key} className="flex h-full flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl text-primary">{course.title}</CardTitle>
                                <CardDescription>{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-6">
                                <div>
                                    <h3 className="font-semibold">{course.contentTitle}</h3>
                                    <ul className="mt-4 space-y-2">
                                        {course.content.map((item: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-2 border-t pt-4">
                                    <p className="text-sm"><span className="font-semibold">Durée:</span> {course.duration}</p>
                                    <p className="text-sm"><span className="font-semibold">Prérequis:</span> {course.prerequisites}</p>
                                    <p className="text-2xl font-bold font-headline">{course.price}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" size="lg">{t('enroll')}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 mx-auto max-w-2xl rounded-lg border bg-card p-8">
                    <h3 className="text-center font-headline text-2xl font-bold">{t('benefitsTitle')}</h3>
                     <ul className="mt-6 space-y-3">
                        {benefits.map((benefit: string, index: number) => (
                           <li key={index} className="flex items-center justify-center">
                                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
