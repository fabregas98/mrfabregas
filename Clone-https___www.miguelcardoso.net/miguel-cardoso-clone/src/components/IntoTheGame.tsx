import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function IntoTheGame() {
  const articles = [
    {
      title: 'The relationship between the Coach and the Sports Director',
      description: 'Portugal Football School is the education and research unit of the Portuguese Football Federation and one of its objectives is the training and qualification of the different football sports agents.',
      image: 'https://ext.same-assets.com/830437270/3782664659.jpeg',
      link: '/into-the-game'
    },
    {
      title: 'Pontapé de saída - "O Mundo do Desporto"',
      description: 'Vision Minho Legal Lab is a junior initiative focused on the personal and academic development of students at the University of Minho.',
      image: 'https://ext.same-assets.com/830437270/3083491716.jpeg',
      link: '/into-the-game'
    },
    {
      title: 'Let the children play',
      description: 'When, in April 2013, I went to Ukrania and arrived in Donetsk to coordinate the Youth Teams of FC Shakhtar Donetsk and coach the U21s...',
      image: 'https://ext.same-assets.com/830437270/3386127416.jpeg',
      link: '/into-the-game'
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Into the Game</h2>
          <p className="body-text max-w-3xl mx-auto">
            Insights, articles, and media appearances from Miguel Cardoso on football coaching,
            leadership, and team management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <Link href={article.link}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-background">
            <Link href="/into-the-game">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
