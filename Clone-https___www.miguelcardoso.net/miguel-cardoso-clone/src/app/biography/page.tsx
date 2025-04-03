import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BiographyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-muted">
        <div className="container-wide">
          <h1 className="heading-lg mb-6">Biography</h1>
          <p className="subtitle mb-2">UEFA Pro Coach</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="sticky top-28">
                <img
                  src="https://ext.same-assets.com/830437270/4254871605.jpeg"
                  alt="Miguel Cardoso Portrait"
                  className="rounded-md shadow-lg w-full h-auto mb-8"
                />
                <div className="flex justify-center mb-8">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-background font-semibold">
                    <Link href="https://www.miguelcardoso.net/wp-content/uploads/2020/05/Miguel-Cardoso-Press-Kit-_-May2020-1.zip">
                      Download Press Kit
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://twitter.com/CoachMCardoso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/Miguel-Cardoso-1674219346026987/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/miguelcardoso.coach/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <p className="body-text mb-6 text-lg">
                  José Miguel Azevedo Cardoso, Portuguese, born in 28 May 1972, graduated in Physical Education and Sports with specialization in football in 1995 and concluded a Masters in Sports Science in 1998 in the College of Sports Science and Physical Education in Oporto University.
                </p>
                <p className="body-text mb-6">
                  Married, father of a 15 year old boy, Cardoso has permanent residence in the historic city of Braga in northern Portugal.
                </p>
                <p className="body-text mb-6">
                  Cardoso started his coaching career in the youth teams of FC Porto while also teaching Physical Education in a school near his hometown of Trofa, in the suburbs of Oporto, school for which he was also the Principal.
                </p>
                <p className="body-text mb-6">
                  During his 9 years at FC Porto, Cardoso coached almost all age groups and was for 4 years in the club's 2nd team as fitness and assistant coach.
                </p>
                <p className="body-text mb-6">
                  Cardoso's breakthrough into the professional leagues came in the 2004/2005 season with the historic Portuguese club CF "Os Belenenses", as the assistant coach. For the following 10 years as an assistant coach at high level football, Cardoso enriched his career and further developed his views on football coaching and preparation while working at SC Braga, Académica de Coimbra, again SC Braga, Sporting CP and Deportivo La Coruña, in Spain.
                </p>
                <p className="body-text mb-6">
                  At SC Braga, Cardoso helped the club achieve its highest sporting honours with the 2nd place finish in the Portuguese League in the 2009/2010 season and as finalists of Europa League in the following season, after participating for the 1st time in the UEFA Champions' League group stage.
                </p>
                <p className="body-text mb-6">
                  A UEFA Pro license holder, Cardoso is a reputed lecturer and presenter in coaching licenses courses in Portugal as well as in various football seminars all over the world.
                </p>
                <p className="body-text mb-6">
                  In April 2013, Cardoso accepted the invitation of FC Shakhtar Donetsk to join the club and take the lead role of the technical coordination of its professional academy and also to be the head coach of its U21 team – this moment marked a new step in Cardoso's career but also a new moment for the club's academy.
                </p>
                <p className="body-text mb-6">
                  Cardoso, who, besides his native Portuguese, is fluent in English, French and Spanish, had the opportunity to add one more language to his linguistic roster and thus enriching his coaching linguistics as well.
                </p>
                <p className="body-text mb-6">
                  Under Cardoso's technical leadership, FC Shakhtar Donetsk Professional Academy entered a new age of successes expressed most notably by reaching the final of UEFA Youth Champions League in the 2014/2015 season.
                </p>
                <p className="body-text mb-6">
                  Of important notice too was the promotion of 5 players from the U21 team to Shakhtar's 1st Team: Oleg Kudrik, Viachslav Tankovskiy, Mykola Matvienko, Oleksandr Zubkov and most notably Viktor Kovalenko, a midfielder who went on to become the best striker in the U20 World Cup played in New Zealand, and together with Matvienko already became international in the National Team of Ukraine.
                </p>
                <p className="body-text mb-6">
                  Other Academy players, Oleksandr Zinchenko and Vladen Yurchenko, also excelled in this period and reached high sporting level, currently playing at Manchester City and Bayer Leverkusen, respectively.
                </p>
                <p className="body-text mb-6">
                  In the beginning of the 2016/2017 season Cardoso became assistant coach in Shakhtar's 1st Team, working with the head coach Paulo Fonseca and went on to become Champion of Ukraine and winner of Ukrainian Cup.
                </p>
                <p className="body-text mb-6">
                  In the 2017/2018 season, Cardoso lead Rio Ave to a 5th place finish in the "Liga NOS" and Europa League Qualification in his first spell as Head Coach in professional football which brings even more value to a feat that had only happened once before in the club's history. Under Cardoso, this success was accompanied by a club record breaking, at the time, with 51 points at the expense of high quality football recognized and laureled from early on and consistently displayed throughout the season.
                </p>
                <p className="body-text mb-6">
                  In June 2018, Cardoso signed with the historical French club FC Nantes succeeding Claudio Ranieri as head coach. Cardoso left FC Nantes in October 2018, with the club's fans flooding social media with messages regretting the decision and wishing Cardoso well in the future.
                </p>
                <p className="body-text mb-6">
                  One month later, Miguel Cardoso took on the role of head coach at RC Celta, thus becoming one of the few Portuguese managers that have managed in two of the "Big 5" leagues in Europe.
                </p>
                <p className="body-text mb-6">
                  In the 2019/20 season, he signed for the AEK of Athens and made his European debut in the Europa League.
                </p>
                <h3 className="heading-md mt-10 mb-4">Education</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li className="body-text">
                    <strong>Degree in Sports Science</strong>
                    <div className="text-sm text-muted-foreground">Specialization in football</div>
                    <div className="text-sm">Sports Science and Physical Education College – Oporto University (Physical Education teacher between 1994 and 2004 accumulating functions as school principal).</div>
                  </li>
                  <li className="body-text">
                    <strong>Master in Sports Science</strong>
                    <div className="text-sm text-muted-foreground">Specialization in youth sports</div>
                    <div className="text-sm">Sports Science and Physical Education College – Oporto University.</div>
                  </li>
                  <li className="body-text">
                    <strong>UEFA Pro Licence Holder</strong>
                  </li>
                </ul>
                <div className="flex justify-between mt-10">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/">Back to Home</Link>
                  </Button>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-background">
                    <Link href="/into-the-game">Into the Game</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
