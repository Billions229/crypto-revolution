'use client';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button variant="ghost" onClick={toggleLanguage} className="font-bold">
      {language.toUpperCase()}
    </Button>
  );
}
