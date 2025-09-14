'use client';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { CheckCircle } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

const aboutImage = placeholderImages.find(p => p.id === 'romaric-about');

export default function AboutPage() {
  const { t } = useTranslation('about');

  const expertisePoints = t('expertise.points', { returnObjects: true }) as string[];

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

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <div className="space-y-8 text-lg text-foreground">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="font-headline text-2xl font-semibold text-primary">{t('bio.title')}</h2>
                <p className="mt-4 text-muted-foreground">{t('bio.content')}</p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h2 className="font-headline text-2xl font-semibold text-primary">{t('expertise.title')}</h2>
                <p className="mt-4 text-muted-foreground">{t('expertise.content')}</p>
                <ul className="mt-6 space-y-3">
                  {expertisePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h2 className="font-headline text-2xl font-semibold text-primary">{t('business.title')}</h2>
                <p className="mt-4 text-muted-foreground">{t('business.content')}</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="sticky top-24">
                {aboutImage &&
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        data-ai-hint={aboutImage.imageHint}
                        width={600}
                        height={800}
                        className="rounded-lg object-cover shadow-2xl"
                    />
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
