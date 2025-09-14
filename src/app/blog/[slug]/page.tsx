
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';

export default function BlogPostPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <article>
                    <header className="mb-8">
                        <Link href="/blog" className="text-sm text-primary hover:underline mb-2 block">&larr; Retour au Blog</Link>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            Article de démonstration
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
                    <Image
                        src="/image.jpg"
                        alt="Romaric Allagbé"
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-lg object-cover mb-8"
                    />
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary">
                        <p className="lead text-xl text-foreground">Ceci est un article de démonstration. Aucun contenu dynamique n'est utilisé.</p>
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
                            <Image
                                src="/image.jpg"
                                alt="Romaric Allagbé"
                                width={64}
                                height={64}
                                className="h-16 w-16 rounded-full object-cover"
                            />
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
