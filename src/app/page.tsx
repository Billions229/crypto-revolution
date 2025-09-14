'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, BookOpen, Users, BarChart2, Car } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImages } from '@/lib/placeholder-images';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

const romaricImage = placeholderImages.find(p => p.id === 'romaric-hero');
const testimonialImages = {
  user1: placeholderImages.find(p => p.id === 'testimonial-1'),
  user2: placeholderImages.find(p => p.id === 'testimonial-2'),
  user3: placeholderImages.find(p => p.id === 'testimonial-3'),
};

export default function Home() {
  const { t } = useTranslation('homepage');

  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: t('services.courses.title'),
      description: t('services.courses.description'),
      link: '/courses',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('services.community.title'),
      description: t('services.community.description'),
      link: '/community',
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: t('services.analysis.title'),
      description: t('services.analysis.description'),
      link: '/services',
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: t('services.other.title'),
      description: t('services.other.description'),
      link: '/services',
    },
  ];

  const articlesData = t('articles', { returnObjects: true });
  const articles = Array.isArray(articlesData) ? articlesData : [];
  
  const testimonialsData = t('testimonials', { returnObjects: true }) as {name: string, quote: string, handle: string, imageId: 'user1' | 'user2' | 'user3'}[];
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData.map(testimonial => ({
      author: {
        name: testimonial.name,
        handle: testimonial.handle,
        avatar: testimonialImages[testimonial.imageId]?.imageUrl || '',
        avatarFallback: testimonial.name.charAt(0)
      },
      text: testimonial.quote,
      href: '#'
  })) : [];


  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 text-center">
        <div className="mx-auto max-w-4xl">
           <Image
                src="/image.jpg"
                alt="Romaric Allagbé"
                width={150}
                height={150}
                priority
                className="mx-auto mb-6 h-36 w-36 rounded-full object-cover shadow-lg"
           />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('hero.headline')} <span className="text-primary">💰</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t('hero.subheadline')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/courses">{t('hero.cta.courses')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/community">{t('hero.cta.telegram')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="text-center font-headline text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 text-center">
                  <Button variant="link" asChild className="text-primary">
                    <Link href={service.link}>
                      {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Analysis */}
      <section className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('latestAnalysis.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('latestAnalysis.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="font-headline">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="ghost" asChild>
                  <Link href={article.link}>
                    {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
          title={t('testimonialsTitle')}
          description={t('socialProof.subtitle')}
          testimonials={testimonials}
      />


      {/* Social Proof */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('socialProof.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('socialProof.subtitle')}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div className="font-bold">
            <p className="text-4xl text-primary">15K+</p>
            <p className="text-muted-foreground">Facebook</p>
          </div>
          <div className="font-bold">
            <p className="text-4xl text-primary">5K+</p>
            <p className="text-muted-foreground">X / Twitter</p>
          </div>
          <div className="font-bold">
            <p className="text-4xl text-primary">10K+</p>
            <p className="text-muted-foreground">Telegram</p>
          </div>
          <div className="font-bold">
            <p className="text-4xl text-primary">8K+</p>
            <p className="text-muted-foreground">WhatsApp</p>
          </div>
        </div>
      </section>
    </div>
  );
}
