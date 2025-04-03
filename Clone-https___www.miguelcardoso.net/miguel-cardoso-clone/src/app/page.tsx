import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import IntoTheGame from '@/components/IntoTheGame';
import Testimonials from '@/components/Testimonials';
import Career from '@/components/Career';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const achievements = [
    { id: 1, icon: "https://ext.same-assets.com/830437270/2644802187.png" },
    { id: 2, icon: "https://ext.same-assets.com/830437270/8111657.png" },
    { id: 3, icon: "https://ext.same-assets.com/830437270/4215186853.png" },
    { id: 4, icon: "https://ext.same-assets.com/830437270/1116073327.png" },
    { id: 5, icon: "https://ext.same-assets.com/830437270/368217574.png" },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Biography Section */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-lg mb-6">Biography</h2>
              <p className="body-text mb-4">
                José Miguel Azevedo Cardoso, Portuguese, born in 28 May 1972, graduated in Physical Education and Sports with specialization in football in 1995 and concluded a Masters in Sports Science in 1998 in the College of Sports Science and Physical Education in Oporto University.
              </p>
              <p className="body-text mb-4">
                Married, father of a 15 year old boy, Cardoso has permanent residence in the historic city of Braga in northern Portugal.
              </p>
              <p className="body-text mb-6">
                Cardoso started his coaching career in the youth teams of FC Porto while also teaching Physical Education in a school near his hometown of Trofa, in the suburbs of Oporto, school for which he was also the Principal.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-background font-semibold">
                <Link href="/biography">Read Full Biography</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://ext.same-assets.com/830437270/4254871605.jpeg"
                alt="Miguel Cardoso Portrait"
                className="rounded-md shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <IntoTheGame />
      <Career />
      <Testimonials />

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Achievements</h2>
            <p className="body-text max-w-3xl mx-auto">
              Throughout his career, Miguel Cardoso has achieved significant milestones and accolades.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((item) => (
              <div key={item.id} className="text-center">
                <Link href="/achievements" className="block transition-transform hover:scale-105">
                  <img
                    src={item.icon}
                    alt="Achievement Icon"
                    className="h-20 w-auto mx-auto"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-background">
              <Link href="/achievements">View All Achievements</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
