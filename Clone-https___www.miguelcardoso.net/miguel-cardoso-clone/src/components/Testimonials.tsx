import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "What Miguel Cardoso demonstrated yesterday against the national champion is that it is not necessary for a team to have that much money to play like a big club team.",
      author: "Nuno Farinha",
      source: "Record",
      date: "27 Aug. 2017"
    },
    {
      id: 2,
      quote: "It is a relief to see the current Rio Ave among a series of repeated and gray models.",
      author: "Carlos Daniel",
      source: "Bancada",
      date: "01 Jan. 2018"
    },
    {
      id: 3,
      quote: "There is a huge technical and tactical work by the coaching staff, by the coach, fabulous.",
      author: "João Alves",
      source: "Play-Off",
      date: "29 Oct. 2017"
    },
    {
      id: 4,
      quote: "This is without any doubt one of the most exciting footballing projects in our football in recent years.",
      author: "Goalpoint",
      source: "",
      date: "9 Dec. 2017"
    },
    {
      id: 5,
      quote: "The team that most impresses excluding the big ones (and many times including them) is always Miguel Cardoso's Rio Ave. It is never too much to compliment the courageous way in which he takes on each game, in any field, with daring football, all without reservations in rostering several talents at the same time.",
      author: "Carlos Daniel",
      source: "Bancada",
      date: "11 Dec. 2017"
    },
    {
      id: 6,
      quote: "Impressive Rio Ave boss who is thriving in his first senior appointment – he is an excellent defensive organizer.",
      author: "World Soccer",
      source: "",
      date: "March 2018"
    },
  ];

  return (
    <section id="what_they_say" className="py-20 relative bg-background">
      {/* Background pattern or texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="https://ext.same-assets.com/830437270/4074194383.jpeg"
          alt="Background Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What They Say</h2>
          <p className="body-text max-w-3xl mx-auto">
            Insights from journalists, coaches, and experts about Miguel Cardoso's work and philosophy.
          </p>
        </div>

        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="sm:basis-full md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full flex flex-col bg-muted border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="text-primary text-5xl font-abril leading-none">"</div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <blockquote className="italic text-sm md:text-base mb-4">
                      {testimonial.quote}
                    </blockquote>
                  </CardContent>
                  <CardFooter className="border-t border-border pt-4 flex flex-col items-start">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.source}{testimonial.source && testimonial.date ? ", " : ""}{testimonial.date}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
