'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/use-translation";
import { Mail, Phone, Facebook, Twitter, Send as Telegram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

export default function ContactPage() {
    const { t } = useTranslation('contact');
    const { toast } = useToast();

    const form = t('form', { returnObjects: true });
    const info = t('info', { returnObjects: true });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission
        toast({
            title: t('success'),
            description: "Nous vous répondrons dans les plus brefs délais.",
        });
        (e.target as HTMLFormElement).reset();
    };

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

                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{t('form.submit')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <Label htmlFor="name">{form.name}</Label>
                                    <Input id="name" type="text" required />
                                </div>
                                <div>
                                    <Label htmlFor="email">{form.email}</Label>
                                    <Input id="email" type="email" required />
                                </div>
                                <div>
                                    <Label htmlFor="message">{form.message}</Label>
                                    <Textarea id="message" required />
                                </div>
                                <Button type="submit" className="w-full">{form.submit}</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <Card>
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl">{info.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                    <a href="#" className="hover:underline">{info.whatsapp}</a>
                                </div>
                                <p className="pt-4 border-t text-sm text-accent italic">{info.specialNote}</p>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl">{t('social')}</CardTitle>
                            </CardHeader>
                             <CardContent className="flex items-center gap-4">
                                 <Button variant="outline" size="icon" asChild><a href="#"><Facebook/></a></Button>
                                 <Button variant="outline" size="icon" asChild><a href="#"><Twitter/></a></Button>
                                 <Button variant="outline" size="icon" asChild><a href="#"><Telegram/></a></Button>
                             </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
