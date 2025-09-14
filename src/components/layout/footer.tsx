'use client';
import Link from 'next/link';
import { Coins, Facebook, Twitter, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const { t } = useTranslation('footer');

  const navItems = [
    { href: '/about', label: t('nav.about') },
    { href: '/courses', label: t('nav.courses') },
    { href: '/services', label: t('nav.services') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/community', label: t('nav.community') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
    { name: 'X/Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Telegram', icon: <Send className="h-5 w-5" />, href: '#' },
    { name: 'WhatsApp', icon: <Phone className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
              <Coins className="h-7 w-7 text-primary" />
              <span>Crypto  Rovolution Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t('mission')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Button key={item.name} variant="ghost" size="icon" asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                    <span className="sr-only">{item.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-headline font-semibold">{t('nav.title')}</h3>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">{t('newsletter.title')}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{t('newsletter.description')}</p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder={t('newsletter.placeholder')} className="flex-grow" />
                <Button type="submit">{t('newsletter.subscribe')}</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crypto  Rovolution Academy. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
