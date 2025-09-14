'use client';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';

const blogImages = {
  solana: placeholderImages.find(p => p.id === 'blog-solana'),
  p2p: placeholderImages.find(p => p.id === 'blog-p2p'),
  eth: placeholderImages.find(p => p.id === 'blog-eth'),
};
const romaricImage = placeholderImages.find(p => p.id === 'romaric-hero');

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { t } = useTranslation('homepage');
    const articles = t('articles', { returnObjects: true }) as {title: string, excerpt: string, link: string}[];
    const article = articles.find(a => a.link === `/blog/${params.slug}`);

    if (!article) {
        notFound();
    }

    const imageKey = article.link.includes('solana') ? 'solana' : article.link.includes('p2p') ? 'p2p' : 'eth';
    const image = blogImages[imageKey];

    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <article>
                    <header className="mb-8">
                        <Link href="/blog" className="text-sm text-primary hover:underline mb-2 block">&larr; Retour au Blog</Link>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            {article.title}
                        </h1>
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                             <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>Romaric Allagbé</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>15 Juillet 2024</span>
                            </div>
                        </div>
                    </header>

                    {image && (
                        <Image 
                            src={image.imageUrl} 
                            alt={image.description} 
                            data-ai-hint={image.imageHint}
                            width={1200} 
                            height={600}
                            className="w-full h-auto rounded-lg object-cover mb-8" 
                        />
                    )}

                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary">
                        <p className="lead text-xl text-foreground">{article.excerpt}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
                        </p>
                        
                        <blockquote className="border-l-4 border-primary pl-4 italic">
                            "La patience est la clé dans le monde de la crypto. N'investissez que ce que vous êtes prêt à perdre." - Coach Romaric
                        </blockquote>

                        <h2>Analyse Approfondie</h2>
                        <p>
                           Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                        </p>
                         <p>
                           Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
                        </p>
                    </div>

                    <Card className="mt-12">
                        <CardContent className="p-6 flex items-center gap-4">
                            {romaricImage && 
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src={romaricImage.imageUrl} alt="Romaric Allagbé" />
                                    <AvatarFallback>RA</AvatarFallback>
                                </Avatar>
                            }
                            <div>
                                <h3 className="font-semibold">À propos de l'auteur</h3>
                                <p className="text-sm text-muted-foreground">Romaric Allagbé est un coach et expert en cryptomonnaies basé à Cotonou, Bénin, dédié à l'éducation financière de la communauté francophone.</p>
                            </div>
                        </CardContent>
                    </Card>
                </article>
            </div>
        </div>
    );
}
