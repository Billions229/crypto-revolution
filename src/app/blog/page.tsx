'use client';
import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { placeholderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const blogImages = {
  solana: placeholderImages.find(p => p.id === 'blog-solana'),
  p2p: placeholderImages.find(p => p.id === 'blog-p2p'),
  eth: placeholderImages.find(p => p.id === 'blog-eth'),
}

export default function BlogPage() {
    const { t } = useTranslation();
    const articlesData = t('homepage.articles', { returnObjects: true }) as any[];
    const articles = Array.isArray(articlesData) 
        ? articlesData.map(article => ({...article, image: article.link.includes('solana') ? blogImages.solana : article.link.includes('p2p') ? blogImages.p2p : blogImages.eth }))
        : [];
        
    const blogTranslations = useTranslation('blog');
    const [activeCategory, setActiveCategory] = useState('all');
    
    const categories = blogTranslations.t('categories', {returnObjects: true});

    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        {blogTranslations.t('title')}
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        {blogTranslations.t('subtitle')}
                    </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-between">
                    <div className="flex flex-wrap justify-center gap-2">
                         {Object.entries(categories).map(([key, value]) => (
                            <Button key={key} variant={activeCategory === key ? 'default' : 'outline'} onClick={() => setActiveCategory(key)}>
                                {value as string}
                            </Button>
                        ))}
                    </div>
                    <div className="w-full max-w-xs">
                        <Input placeholder={blogTranslations.t('searchPlaceholder')} />
                    </div>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {articles.map((article) => (
                        <Card key={article.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                             {article.image && (
                                <Image 
                                    src={article.image.imageUrl} 
                                    alt={article.image.description} 
                                    data-ai-hint={article.image.imageHint}
                                    width={800} 
                                    height={400}
                                    className="w-full h-48 object-cover" 
                                />
                            )}
                            <CardHeader>
                                <CardTitle className="font-headline">{article.title}</CardTitle>
                                <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow"></CardContent>
                            <CardFooter>
                                <Button variant="secondary" asChild className="w-full">
                                    <Link href={article.link}>
                                        {blogTranslations.t('readMore')}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    )
}
