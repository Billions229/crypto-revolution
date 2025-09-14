'use client';
import Link from 'next/link';
import { Coins, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useTranslation } from '@/hooks/use-translation';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export function Header() {
  const { t } = useTranslation('navigation');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/courses', label: t('courses') },
    { href: '/services', label: t('services') },
    { href: '/blog', label: t('blog') },
    { href: '/community', label: t('community') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Coins className="h-6 w-6 text-primary" />
          <span>Romaric Crypto Academy</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/contact">{t('contact')}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
              </SheetHeader>
              <div className="flex h-full flex-col p-6 pt-0">
                <Link href="/" className="mb-8 flex items-center gap-2 font-headline text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>
                  <Coins className="h-6 w-6 text-primary" />
                  <span>Romaric Crypto Academy</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                   <Link href="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                      {t('contact')}
                    </Link>
                </nav>
                <div className="mt-auto">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
