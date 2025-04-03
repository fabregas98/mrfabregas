import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/830437270/2606572140.png')",
          filter: "brightness(0.7)"
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />

      {/* Content */}
      <div className="container-wide relative z-10 pt-20 mt-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-primary mb-4">MIGUEL CARDOSO</h1>
          <p className="subtitle mb-6">UEFA Pro Coach</p>
          <p className="body-text text-xl mb-8 max-w-2xl">
            José Miguel Azevedo Cardoso, Portuguese, born in 28 May 1972, graduated in Physical Education and Sports with specialization in football in 1995 and concluded a Masters in Sports Science in 1998 in the College of Sports Science and Physical Education in Oporto University.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-background font-semibold">
              <Link href="/biography">Read More</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:text-primary/90 hover:bg-primary/10 font-semibold">
              <Link href="/into-the-game">Into the Game</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
