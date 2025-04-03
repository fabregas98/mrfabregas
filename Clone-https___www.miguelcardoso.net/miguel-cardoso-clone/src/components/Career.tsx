import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function Career() {
  const careerHighlights = [
    {
      id: 1,
      period: "2020 > 2021",
      club: "Rio Ave FC",
      logo: "https://ext.same-assets.com/830437270/3614752074.png",
      role: "Head Coach",
      league: "Portuguese 1st League"
    },
    {
      id: 2,
      period: "2019 > 2020",
      club: "AEK Athens",
      logo: "https://ext.same-assets.com/830437270/368586444.png",
      role: "Head Coach",
      league: "Greek Super League"
    },
    {
      id: 3,
      period: "2018 > 2019",
      club: "RC Celta",
      logo: "https://ext.same-assets.com/830437270/889407889.png",
      role: "Head Coach",
      league: "Spanish La Liga"
    },
    {
      id: 4,
      period: "2018 > 2019",
      club: "FC Nantes",
      logo: "https://ext.same-assets.com/830437270/3064207197.png",
      role: "Head Coach",
      league: "French Ligue 1"
    },
    {
      id: 5,
      period: "2017 > 2018",
      club: "Rio Ave FC",
      logo: "https://ext.same-assets.com/830437270/3614752074.png",
      role: "Head Coach",
      league: "Portuguese 1st League"
    },
    {
      id: 6,
      period: "2016 > 2017",
      club: "FC Shakhtar Donetsk",
      logo: "https://ext.same-assets.com/830437270/1980953466.png",
      role: "Assistant Coach",
      league: "Ukrainian Premier League"
    },
  ];

  const statsItems = [
    {
      number: "141",
      label: "Championship",
      category: "Matches as Head Coach"
    },
    {
      number: "5",
      label: "Cup",
      category: "Matches as Head Coach"
    },
    {
      number: "4",
      label: "Cup League",
      category: "Matches as Head Coach"
    },
    {
      number: "3",
      label: "UEFA Europa League",
      category: "Matches as Head Coach"
    },
    {
      number: "235",
      label: "Championship",
      category: "Matches as Assistant Coach"
    },
    {
      number: "24",
      label: "Cup",
      category: "Matches as Assistant Coach"
    },
    {
      number: "15",
      label: "Cup League",
      category: "Matches as Assistant Coach"
    },
    {
      number: "36",
      label: "UEFA Europa League",
      category: "Matches as Assistant Coach"
    },
    {
      number: "12",
      label: "UEFA Champions League",
      category: "Matches as Assistant Coach"
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Coaching Career</h2>
          <p className="body-text max-w-3xl mx-auto">
            Miguel Cardoso's professional journey across European football, from Portugal to Ukraine, France, Spain, and Greece.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {careerHighlights.map((item) => (
            <div key={item.id} className="flex items-center bg-background p-4 rounded-md border border-border">
              <div className="w-20 md:w-28 text-center text-sm md:text-base font-medium">
                {item.period}
              </div>
              <Separator orientation="vertical" className="h-14 mx-4" />
              <div className="w-12 md:w-16 flex justify-center">
                <img
                  src={item.logo}
                  alt={item.club}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <div className="ml-4 flex-grow">
                <div className="font-bold">{item.club}</div>
                <div className="text-sm text-muted-foreground">
                  {item.role} • {item.league}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsItems.map((stat, index) => (
            <div
              key={`stat-${index}`}
              className="bg-background p-6 rounded-md border border-border text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.category}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-background">
            <Link href="/timeline">View Full Timeline</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
