import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function IntoTheGamePage() {
  const articles = [
    {
      id: 1,
      title: 'The relationship between the Coach and the Sports Director',
      description: 'Portugal Football School is the education and research unit of the Portuguese Football Federation and one of its objectives is the training and qualification of the different football sports agents.',
      content: 'Portugal Football School is the education and research unit of the Portuguese Football Federation and one of its objectives is the training and qualification of the different football sports agents. Following its Action Plan for this season, a Training Course for Sports Agents is included, for which I was invited by the Director of this School, Dr. André Seabra, to give a lecture with the theme "The relationship between the Coach and the Sports Director". It was an excellent time for sharing knowledge and personal development.',
      image: 'https://ext.same-assets.com/830437270/3782664659.jpeg',
    },
    {
      id: 2,
      title: 'Pontapé de saída - "O Mundo do Desporto"',
      description: 'Vision Minho Legal Lab is a junior initiative focused on the personal and academic development of students at the University of Minho.',
      content: 'Vision Minho Legal Lab is a junior initiative focused on the personal and academic development of students at the University of Minho. It aims to provide young students with useful tools when they enter the job market. They promoted a conference entitled Pontapé de Saída – O Mundo do Desporto which aimed to put students in contact with stakeholders from different areas inherent to this subject: journalism, training, law or management, among others. I was invited to make a presentation that addressed the theme "Team Management" where I tried to reflect on the creation of successful contexts, the management of high performance teams, communication and leadership. Generalist and extremely interesting, this is a personal reflection that goes from sport to the world of organizations in general.',
      image: 'https://ext.same-assets.com/830437270/3083491716.jpeg',
    },
    {
      id: 3,
      title: 'Let the children play',
      description: 'When, in April 2013, I went to Ukrania and arrived in Donetsk to coordinate the Youth Teams of FC Shakhtar Donetsk and coach the U21s...',
      content: "When, in April 2013, I went to Ukrania and arrived in Donetsk to coordinate the Youth Teams of FC Shakhtar Donetsk and coach the U21s, one of the things that pleased me was the fact that only from the U12 there were teams with formal competition. There was another pedagogical space that allowed the boys to play and where I sometimes went to talk to the coaches. I realized that the spirit was completely different.",
      image: 'https://ext.same-assets.com/830437270/3386127416.jpeg',
    },
    {
      id: 4,
      title: 'Futebol a sério',
      description: 'Participation in "Futebol a Sério", a TV show from Canal 11 where we really talk about football, with Sofia Oliveira.',
      content: 'Participation in "Futebol a Sério", a TV show from Canal 11 where we really talk about football, with Sofia Oliveira.',
      image: 'https://ext.same-assets.com/830437270/1595141587.jpeg',
    },
    {
      id: 5,
      title: 'Loulé Sports Meeting',
      description: 'A conversation about the game model and the many factors that can influence it. Also with the futsal coach Orlando Duarte.',
      content: 'A conversation about the game model and the many factors that can influence it. Also with the futsal coach Orlando Duarte.',
      image: 'https://ext.same-assets.com/830437270/1266084161.jpeg',
    },
    {
      id: 6,
      title: 'Elite Soccer',
      description: 'The prestigious magazine Elite Soccer invited Miguel Cardoso to write an article on the Defensive Transition, which made the cover of the June 2019 edition.',
      content: 'The prestigious magazine Elite Soccer invited Miguel Cardoso to write an article on the Defensive Transition, which made the cover of the June 2019 edition. "If coaches from around the world share their knowledge, players from around the world will benefit. Therefore, it was a pleasure to contribute a training session for Elite Soccer magazine and I hope it can be of support to many coaches and players," commented Miguel Cardoso.',
      image: 'https://ext.same-assets.com/830437270/3083491716.jpeg',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-muted">
        <div className="container-wide">
          <h1 className="heading-lg mb-6">Into the Game</h1>
          <p className="subtitle mb-2">Insights and Media</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="bg-muted border-border overflow-hidden flex flex-col">
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
                  <p className="text-muted-foreground line-clamp-3">{article.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-4">
                  <p className="text-sm line-clamp-3">{article.content}</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Read Full Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
